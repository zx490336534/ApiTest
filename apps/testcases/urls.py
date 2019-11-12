# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-13 00:05
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers
from .views import TestcasesViewSet

router = routers.DefaultRouter()
router.register(r'testcases', TestcasesViewSet)

urlpatterns = [

]
urlpatterns += router.urls
