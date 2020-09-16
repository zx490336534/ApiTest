# -*- coding:utf-8 -*-
"""
@Describe: utils
@Author: zhongxin
@Time: 2019-11-08 23:20
@File: utils.py
@Email: 490336534@qq.com
"""

from backend.utils.timeoperator import change_time


def handle_env(datas):
    datas_list = []
    for item in datas:
        item['create_time'] = change_time(item['create_time'])
        datas_list.append(item)
    return datas_list
