from database import db
from models.tag import Tag
from main import analyzer

def word_main_form(word):
    return analyzer.parse(word)[0].normal_form

def word_is_extra(word):
    analyze_res = analyzer.parse(word)[0]
    return analyze_res.tag.POS == 'PREP' or analyze_res.tag.POS == 'CONJ' or analyze_res.tag.POS == 'PRCL'

def add_tag(tag_name, show_in_list=True):
    tag_parts = tag_name.split(' ')
    for part in tag_parts:
        if word_is_extra(part):
            tag_parts.remove(part)
    if len(tag_parts) == 0:
        return
    tag_parts = list(map(word_main_form, tag_parts))
    tag_range_factor = ' '.join(tag_parts)
    tag = Tag(name=tag_name, range_factor=tag_range_factor, show_in_list=show_in_list)
    db.session.add(tag)
    return tag