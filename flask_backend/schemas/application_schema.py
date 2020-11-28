from extensions import ma
from models.application import Application
from schemas.tag_schema import tags_schema

class ApplicationSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Application

    id = ma.auto_field()
    name = ma.auto_field()
    description = ma.auto_field()
    image_url = ma.auto_field()
    gp_link = ma.auto_field()
    appstore_link = ma.auto_field()
    msstore_link = ma.auto_field()


# Init schema
application_schema = ApplicationSchema()
applications_schema = ApplicationSchema(many=True)