# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-08 20:38
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers
from .views import InterfacesViewSet

router = routers.DefaultRouter()
router.register(r'interfaces', InterfacesViewSet)
urlpatterns = []
urlpatterns += router.urls
