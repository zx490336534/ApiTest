# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-12 07:38
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers
from .views import ReportsViewSet

router = routers.DefaultRouter()
router.register(r'reports', ReportsViewSet)
urlpatterns = [
]
urlpatterns += router.urls
