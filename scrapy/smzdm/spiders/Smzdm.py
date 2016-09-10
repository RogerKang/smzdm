#encoding: utf-8
import re
import scrapy
from scrapy.contrib.linkextractors import LinkExtractor
from scrapy.contrib.spiders import CrawlSpider, Rule
import urllib
import base64

from items import SmzdmItem

TV_RUNTIME_RE = re.compile(ur'单集片长: (\d+)')
LANGUAGES_RE = re.compile(ur"语言:</span> (.+?)<br>")
COUNTRIES_RE = re.compile(ur"制片国家/地区:</span> (.+?)<br>")
NUM_RE = re.compile(r"(\d+)")


class SmzdmSpider(CrawlSpider):
    name = "smzdm"
    allowed_domains = ["www.smzdm.com"]
    start_urls = ["http://www.smzdm.com/"]

    rules = (
        Rule(LinkExtractor(allow=r"/p/\d+/($|\?\w+)"),
            callback="parse_smzdm", follow=True),
    )
    def parse_smzdm(self, response):
        item = SmzdmItem()

        item["subject_id"] = int(response.url.split("/")[-2])
        self.get_name(response, item)

        self.get_link2(response, item)
        self.get_price(item)
        self.get_pic_url(response, item)
        self.get_origin(response, item)
        self.downloadPic(response, item)
        self.get_pic_base64(response ,item)
        self.get_buy_link(response, item)
        self.get_process(response, item)

        return item

    def get_name(self, response, item):
        name = response.xpath("//title/text()").extract()
        if name: item["name"] = name[0]

    def get_link(self, response, item):
        link = response.xpath("//link[@rel='canonical']").extract()
        if link : item["link"] = re.match(r".*href=\"(.*)\".*", link[0]).group(1)

    def get_link2(self, response, item):
        link = response.xpath("//meta[@property='og:url']").extract()
        if link : item["link"] = re.match(r".*content=\"(.*)\".*", link[0]).group(1)

    def get_price(self, item):
        price = re.match(r".*(\$[\d\.]*\d).*", item['name'])
        if price : item['price'] = price.group(1)
        else:
            price = re.match(u".*[^\d\.]([\d\.]+[\u5143]+).*", item['name'])
            if price : item['price'] = price.group(1)
            else : item['price'] = '0'


    def get_pic_url(self, response, item):
        pic_url = response.xpath("//a[@class='pic-Box']").extract()
        if pic_url : item['pic_url'] = re.match(r".*src=\"([^\"]*)\".*", pic_url[0]).group(1)

    def get_origin(self, response, item):
        item['origin'] = response.xpath("//html").extract()[0]

    def downloadPic(self, response, item):
        urllib.urlretrieve(item['pic_url'], '.\\pictures\\'+str(item['subject_id'])+'.jpg')

    def get_pic_base64(self, response, item):
        f=open('.\\pictures\\'+str(item['subject_id'])+'.jpg','rb')
        item['picBase64']=base64.b64encode(f.read())
        f.close()

    def get_buy_link(self, response, item):
        buyLink = response.xpath("//div[@class='buy']/a/@href").extract()
        if buyLink : item["buyLink"] = buyLink[0]

    def get_process(self, response, item):
        process = response.xpath("//div[@class='progressing']/@style").extract()
        if process:item['process'] = re.match(r".*width:([\d\.]+)%.*",process[0]).group(1)


    #<link rel="canonical" href="http://www.smzdm.com/p/6095042/">
            #adidas 阿迪达斯 运动休闲系列 TAA4142 女士T恤 68元包邮（需用券，148-30-50）_优购网优惠_发现频道_什么值得买


