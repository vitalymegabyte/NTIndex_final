from database import db
from models.application import Application
from models.tag import Tag
from preprocessors.tag_preprocessor import add_tag
from main import app
from gp_parser import gp_parse

app.app_context().push()

app_seed1 = Application(
        name="Adobe Photoshop Express: редактор фото и коллажей",
        image_url='https://play-lh.googleusercontent.com/kSYT6j4SVHdvA6FcP_erR5wBfPpAh_AVbxC5aihMe7OztbFV_iDAQOLdPN3fVyXmsqU=s180-rw', 
        description='<p>УЛУЧШЕНИЕ И СТИЛИЗАЦИЯ ФОТОГРАФИЙ.</p><p>Реализуйте свой потенциал с Photoshop Express, быстрым и простым редактором фотографий, которым пользуются миллионы творческих людей. Редактируйте фотографии, как профессионал, с помощью этой удобной многофункциональной цифровой студии на мобильном устройстве.</p><p></p><p>Photoshop Express предоставляет полный спектр разнообразных инструментов и эффектов. Используйте рамки и текст, улучшайте цвета и образы, создавайте коллажи, быстро исправляйте и улучшайте ваши достойные внимания моменты. И все это бесплатно!</p><p></p><p></p><p>КОРРЕКЦИЯ ПЕРСПЕКТИВЫ</p><p>• Исправляйте искривленные изображения автоматически.</p><p>• Исправьте искаженный угол съемки с помощью инструмента Трансформирование.</p><p></p><p>УДАЛЕНИЕ ШУМА</p><p>• Устраните зернистость или уменьшите цветовой шум для получения кристально чистого изображения.</p><p>• Повысьте резкость деталей для создания лучших изображений.</p><p></p><p>РАЗМЫТИЕ</p><p>• Привлеките внимание к определенным элементам и смешайте фон с помощью радиального размытия.</p><p>• Улучшайте изображения и создавайте эффект движения с помощью функций полного размытия.</p><p></p><p>РАМКИ И ТЕКСТ</p><p>• Добавьте индивидуальности стикерам, мемам и подписям.</p><p>• Измените стиль сообщений, используя множество шрифтов, цветов и настроек непрозрачности.</p><p>• Подберите рамку под цвет фото или свой вкус.</p><p>• Настройте размещение текста с помощью панорамирования, масштабирования и поворота.</p><p>• Добавьте водяные знаки, пользовательский текст или логотипы.</p><p></p><p>ФИЛЬТРЫ И ЭФФЕКТЫ</p><p>• Придайте эмоциям выразительности с помощью различных фильтров: «Монохромный», «Портрет», «Природа» и «Двухцветный».</p><p>• Поменяйте цветовую температуру, красочность и другие цветовые эффекты с помощью удобного ползунка.</p><p>• Удалите туман или дымку, чтобы создать насыщенный деталями пейзаж.</p><p></p><p>ПОТРЯСАЮЩИЕ КОЛЛАЖИ</p><p>• Создавайте профессиональные коллажи, добавляя готовые макеты сетки.</p><p></p><p>• Изменяйте толщину и цвет границ.</p><p>• Печатайте фотографии непосредственно из приложения.</p><p></p><p>ТОЧЕЧНОЕ ВОССТАНОВЛЕНИЕ</p><p>• Уберите дефекты и пятна с фотографий</p><p></p><p>БЫСТРЫЕ ИСПРАВЛЕНИЯ</p><p>• Кадрирование, выпрямление, вращение и зеркальное отражение фотографий.</p><p>• Автоматическое исправление контраста, экспозиции и баланса белого одним касанием.</p><p>• Устранение эффекта красных и засвеченных глаз.</p><p></p><p>ИМПОРТ И ЭКСПОРТ ФОТОГРАФИЙ</p><p>• Загружайте изображения со своего мобильного устройства, из Adobe Creative Cloud, Dropbox, Facebook и Google Фото.</p><p>• Поддержка, импорт и редактирование форматов RAW и TIFF.</p><p>• Изменение размера и настройка качества изображений JPEG перед сохранением.</p><p>• Делитесь своими фотографиями в Instagram, Facebook, Twitter, Flickr, WhatsApp и т. д. одним касанием.</p><p></p><p>Программа Photoshop Express создана компанией Adobe — разработчиком семейства Photoshop.</p><p></p><p>Условия использования Adobe:</p><p>Предназначено для лиц в возрасте 13 лет и старше. Требует принятия условий и положений политики конфиденциальности Adobe.</p><p>http://www.adobe.com/go/terms_linkfree_ru</p><p>http://www.adobe.com/go/privacy_policy_linkfree_ru</p><p></p>', 
        appstore_link='https://apps.apple.com/ru/app/photoshop-express-photo-editor/id331975235', 
        gp_link='https://play.google.com/store/apps/details?id=com.adobe.psmobile',
        msstore_link='https://www.microsoft.com/ru-ru/p/adobe-photoshop-express-%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-%D1%81-%D0%BA%D0%BE%D1%80%D1%80%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%D0%BC%D0%B8-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D0%BC%D0%B8-%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82%D0%B0%D0%BC%D0%B8-%D0%B8-%D1%80%D0%B0%D0%BC%D0%BA%D0%B0%D0%BC%D0%B8/9wzdncrfj27n')

tag_seed1 = add_tag('с размытием')
tag_seed2 = add_tag('с удалением шума')
tag_seed3 = add_tag('графический редактор', show_in_list=False)
tag_seed4 = add_tag('с фильтрами')
tag_seed5 = add_tag('для цветокоррекции')
if tag_seed1 != None:
    app_seed1.tags.append(tag_seed1)
if tag_seed2 != None:
    app_seed1.tags.append(tag_seed2)
if tag_seed3 != None:
    app_seed1.tags.append(tag_seed3)
if tag_seed4 != None:
    app_seed1.tags.append(tag_seed4)

db.session.add(app_seed1)

graphic_redactors = gp_parse('графический редактор')
for redactor in graphic_redactors:
    has_now = Application.query.filter_by(name=redactor[0]).first()
    if has_now == None:
        redactor_seed = Application(
            name=redactor[0],
            image_url=redactor[1],
            gp_link=redactor[2],
            description=redactor[3]
        )
        redactor_seed.tags.append(tag_seed3)
        if redactor_seed.name == 'Редактор фото':
            redactor_seed.tags.append(tag_seed4)
            redactor_seed.tags.append(tag_seed5)
        db.session.add(redactor_seed)

tag_seed6 = add_tag('с подсветкой синтаксиса')
tag_seed7 = add_tag('с подсветкой кода')
tag_seed8 = add_tag('с режимом чтения')
tag_seed9 = add_tag('текстовый редактор', show_in_list=False)

text_redactors = gp_parse('текстовый редактор')
for redactor in text_redactors:
    has_now = Application.query.filter_by(name=redactor[0]).first()
    if has_now == None:
        redactor_seed = Application(
            name=redactor[0],
            image_url=redactor[1],
            gp_link=redactor[2],
            description=redactor[3]
        )
        redactor_seed.tags.append(tag_seed9)
        if redactor_seed.name == 'Code Editor' or redactor_seed.name == 'QuickEdit Текстовый редактор':
            redactor_seed.tags.append(tag_seed6)
            redactor_seed.tags.append(tag_seed7)
        if redactor_seed.name == 'VLk Текстовый редактор':
            redactor_seed.tags.append(tag_seed8)

        db.session.add(redactor_seed)
db.session.commit()