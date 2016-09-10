#encoding: utf-8
from misc.store import smzdmDB


class SmzdmPipeline(object):
    def process_item(self, item, spider):
        if spider.name != "smzdm":  return item
        if item.get("subject_id", None) is None: return item

        spec = { "subject_id": item["subject_id"] }
        smzdmDB.faxian.update(spec, {'$set': dict(item)}, upsert=True)

        return None