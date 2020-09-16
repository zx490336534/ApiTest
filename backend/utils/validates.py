# -*- coding:utf-8 -*-
"""
@Describe: validates
@Author: zhongxin
@Time: 2019-11-12 22:28
@File: validates.py
@Email: 490336534@qq.com
"""
from rest_framework import serializers

from projects.models import Projects
from interfaces.models import Interfaces
from envs.models import Envs


def whether_existed_project_id(value):
    """
    检查项目id是否存在
    :param value:
    :return:
    """
    if not isinstance(value, int):
        raise serializers.ValidationError('所选项目有误！')
    elif not Projects.objects.filter(is_delete=False, id=value).exists():
        raise serializers.ValidationError('所选项目不存在！')


def whether_existed_interface_id(value):
    """
    检查项目id是否存在
    :param value:
    :return:
    """
    if not isinstance(value, int):
        raise serializers.ValidationError('所选接口有误!')
    elif not Interfaces.objects.filter(is_delete=False, id=value).exists():
        raise serializers.ValidationError('所选接口不存在!')


def whether_existed_env_id(value):
    """
    检查环境配置id是否存在
    :param value:
    :return:
    """
    if value != 0:
        if not isinstance(value, int):
            raise serializers.ValidationError('所选环境配置有误!')
        elif not Envs.objects.filter(is_delete=False, id=value).exists():
            raise serializers.ValidationError('所选环境配置不存在!')
