# -*- coding: utf-8 -*-
from django.db.models import Count
from interfaces.models import Interfaces
from testsuits.models import Testsuits
from utils.timeoperator import change_time


def get_count_by_project(datas):
    datas_list = []
    for item in datas:
        item['create_time'] = change_time(item['create_time'])
        project_id = item['id']
        interfaces_testcases_objs = Interfaces.objects.values('id').annotate(testcases=Count('testcases')). \
            filter(project_id=project_id, is_delete=False)
        interfaces_count = interfaces_testcases_objs.count()
        testcases_count = 0
        for one_dict in interfaces_testcases_objs:
            testcases_count += one_dict['testcases']

        interfaces_configures_objs = Interfaces.objects.values('id').annotate(configures=Count('configures')). \
            filter(project_id=project_id, is_delete=False)
        configures_count = 0
        for one_dict in interfaces_configures_objs:
            configures_count += one_dict['configures']

        testsuits_count = Testsuits.objects.filter(project_id=project_id, is_delete=False).count()

        item['interfaces'] = interfaces_count
        item['testsuits'] = testsuits_count
        item['testcases'] = testcases_count
        item['configures'] = configures_count

        datas_list.append(item)
    return datas_list
