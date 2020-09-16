# -*- coding:utf-8 -*-
"""
@Describe: urls
@Author: zhongxin
@Time: 2019-11-12 22:29
@File: urls.py
@Email: 490336534@qq.com
"""
from rest_framework import routers

from .views import DebugTalksViewSet

router = routers.DefaultRouter()
router.register(r'debugtalks', DebugTalksViewSet)

urlpatterns = [

]
urlpatterns += router.urls
