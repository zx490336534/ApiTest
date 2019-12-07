# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-12 23:21
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers
from .views import ConfiguresViewSet

router = routers.DefaultRouter()
router.register(r'configures', ConfiguresViewSet)
urlpatterns = [
]
urlpatterns += router.urls
