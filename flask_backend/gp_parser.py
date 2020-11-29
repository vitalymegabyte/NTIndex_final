import requests
from bs4 import BeautifulSoup
import esprima

HEADERS = {'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
           'accept': '*/*', 'Accept-Language': 'ru-RU, ru;q=0.9, en-US;q=0.8, en;q=0.7, fr;q=0.6'}



def get_html(url, params = None):
    r = requests.get(url, headers = HEADERS, params=params)
    return r


def get_content(html):
    soup = BeautifulSoup(html, 'html.parser')
    return soup



def gp_parse(index):
    urlMain                 = f'https://play.google.com/store/search?q={str(index)}&c=apps'
    html                    = get_html(urlMain)
    f                       = get_content(html.text).find_all('script')[20].next
    try:
        main_before_json        = esprima.parseScript(f).body[0].expression.arguments[0].properties[3].value.elements[0].elements[1].elements[0]
    except IndexError:
        return []
    result                  = []
    for i in main_before_json.elements[0].elements[0].elements[:10]:

        url                 = f'https://play.google.com{i.elements[9].elements[4].elements[2].value}'
        htmlI               = get_html(url)
        product             = get_content(htmlI.text)
        title               = i.elements[2].value
        iconUrl             = i.elements[1].elements[1].elements[1].elements[3].elements[2].value
        description         = product.find_all('meta')[9].get('content')

        #print(f'НАЗВАНИЕ : {title}, КАРТИНКА: {iconUrl}, ОПИСАНИЕ: {description}')
        result.append([title, iconUrl, url, description])
    return result
