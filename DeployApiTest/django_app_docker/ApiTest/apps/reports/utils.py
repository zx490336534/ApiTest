# -*- coding:utf-8 -*-
"""
@Describe: utils
@Author: zhongxin
@Time: 2019-11-12 07:42
@File: utils.py
@Email: 490336534@qq.com
"""
from backend.utils.timeoperator import change_time


def format_output(datas):
    datas_list = []
    for item in datas:
        item['result'] = 'Pass' if item['result'] else 'Fail'
        item['create_time'] = change_time(item['create_time'])
        datas_list.append(item)
    return datas_list


def get_file_contents(filename, chunk_size=512):
    with open(filename, encoding='utf8') as f:
        while True:
            c = f.read(chunk_size)
            if c:
                yield c
            else:
                break
