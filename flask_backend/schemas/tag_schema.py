from extensions import ma
from models.tag import Tag

class TagSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Tag

    id = ma.auto_field()
    name = ma.auto_field()


# Init schema
tag_schema = TagSchema()
tags_schema = TagSchema(many=True)