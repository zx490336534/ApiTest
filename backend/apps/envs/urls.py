# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-08 21:01
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers
from .views import EnvsViewSet

router = routers.DefaultRouter()
router.register(r'envs', EnvsViewSet)
urlpatterns = [

]
urlpatterns += router.urls
