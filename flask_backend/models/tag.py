from database import db
from models.tags_relations import tags_relations

class Tag(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    range_factor = db.Column(db.String(100), nullable=False)
    show_in_list = db.Column(db.Boolean, nullable=False)
    applications = db.relationship('Application', secondary=tags_relations, lazy='dynamic')