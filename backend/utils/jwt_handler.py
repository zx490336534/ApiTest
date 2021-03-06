# -*- coding:utf-8 -*-
"""
@Describe: jwt_handler
@Author: zhongxin
@Time: 2019-10-29 22:39
@File: jwt_handler.py
@Email: 490336534@qq.com
"""
import datetime


def jwt_response_payload_handler(token, user=None, request=None):
    user.last_login = str(datetime.datetime.today())
    user.save()
    return {
        'token': token,
        'user_id': user.id,
        'username': user.username,
    }
