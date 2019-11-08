# -*- coding:utf-8 -*-
"""
@Describe: utils
@Author: zhongxin
@Time: 2019-11-08 20:54
@File: utils.py
@Email: 490336534@qq.com
"""
from django.db.models import Count
from interfaces.models import Interfaces
from utils.timeoperator import change_time


def get_count_by_interface(datas):
    datas_list = []
    for item in datas:
        item['create_time'] = change_time(item['create_time'])

        project_id = item['id']
        interfaces_testcases_objs = Interfaces.objects.values('id').annotate(testcases=Count('testcases')). \
            filter(project_id=project_id, is_delete=False)
        testcases_count = 0
        for one_dict in interfaces_testcases_objs:
            testcases_count += one_dict['testcases']

        interfaces_configures_objs = Interfaces.objects.values('id').annotate(configures=Count('configures')). \
            filter(project_id=project_id, is_delete=False)
        configures_count = 0
        for one_dict in interfaces_configures_objs:
            configures_count += one_dict['configures']

        item['testcases'] = testcases_count
        item['configures'] = configures_count

        datas_list.append(item)
    return datas_list
