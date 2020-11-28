from database import db
from models.tags_relations import tags_relations

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(5000))
    image_url = db.Column(db.String(1000))
    gp_link = db.Column(db.String(1000))
    appstore_link = db.Column(db.String(1000))
    msstore_link = db.Column(db.String(1000))
    tags = db.relationship('Tag', secondary=tags_relations, lazy='dynamic')