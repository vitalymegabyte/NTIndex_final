from flask import Flask
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from database import db
from flask_cors import CORS, cross_origin

from models.application import Application
from models.tag import Tag
from models.tags_relations import tags_relations

from schemas.application_schema import application_schema, applications_schema
from schemas.tag_schema import tags_schema

from flask_restful import reqparse
import pymorphy2
import sys

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://vitaly:12345678@db/ntindex?charset=utf8mb4'
cors = CORS(app)

db.init_app(app)
migrate = Migrate(app, db)

analyzer = pymorphy2.MorphAnalyzer()

def word_main_form(word):
    return analyzer.parse(word)[0].normal_form

def word_is_extra(word):
    analyze_res = analyzer.parse(word)[0]
    return analyze_res.tag.POS == 'PREP' or analyze_res.tag.POS == 'CONJ' or analyze_res.tag.POS == 'PRCL'

@app.route('/')
@cross_origin()
def main_page():
    return 'This is a main page'

@app.route('/search')
@cross_origin()
def search():
    parser = reqparse.RequestParser()
    parser.add_argument('query', type=str)
    args = parser.parse_args()

    query = args['query']
    query = query.replace('.', '')
    query = query.replace(',', '')
    query = query.replace(';', '')
    query = query.split(' ')
    for part in query:
        if word_is_extra(part):
            query.remove(part)
    query = list(map(lambda word: word_main_form(word), query))

    query_tags_length = len(query)
    for i in range(0, query_tags_length - 1):
        query.append(f'{query[i]} {query[i + 1]}')

    tag_sequence = Tag.range_factor.ilike(query[0])
    for elem in query[1:]:
        tag_sequence = tag_sequence | Tag.range_factor.ilike(elem)

    applications = db.session.query(Application).filter(Application.tags.any(tag_sequence)).join(Application.tags)

    output = []
    
    for application in applications:
        output_app = application_schema.dump(application)
        output_app['tags'] = []
        output_app['range_factor'] = 0
        for tag in application.tags:
            if tag.range_factor in query:
                if tag.show_in_list:
                    output_app['range_factor'] += 1
                    output_app['tags'].append(tag.name)
                else:
                    output_app['range_factor'] += 2
        output.append(output_app)
    
    output = sorted(output, key=lambda application : -len(application['tags']))

    return jsonify(output)
