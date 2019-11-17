# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-17 12:21
@File: urls.py
@Email: 490336534@qq.com
"""
from django.urls import path
from rest_framework import routers
from .views import SummaryAPIView

urlpatterns = [
    path('summary/', SummaryAPIView.as_view(), name='summary')
]
