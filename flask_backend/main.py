from flask import Flask
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from database import db
from flask_cors import CORS, cross_origin

from flask_restful import reqparse

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://vitaly:12345678@db/cadre?charset=utf8'
cors = CORS(app)

db.init_app(app)
migrate = Migrate(app, db)


@app.route('/')
@cross_origin()
def main_page():
    return 'This is a main page'
