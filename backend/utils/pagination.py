# -*- coding:utf-8 -*-
"""
@Describe: pagination
@Author: zhongxin
@Time: 2019-11-07 23:06
@File: pagination.py
@Email: 490336534@qq.com
"""
from django.conf import settings
from rest_framework import pagination


class PageNumberPaginationManual(pagination.PageNumberPagination):
    max_page_size = 50
    page_size_query_param = 'size'
    page_query_description = '第几页'
    page_size_query_description = '每页几条'

    def get_paginated_response(self, data):
        response = super(PageNumberPaginationManual, self).get_paginated_response(data)
        response.data['total_pages'] = self.page.paginator.num_pages
        response.data['current_page_num'] = self.page.number
        return response
