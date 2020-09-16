# -*- coding:utf-8 -*-
"""
@Describe: serializers
@Author: zhongxin
@Time: 2019-11-08 21:02
@File: serializers.py
@Email: 490336534@qq.com
"""
from rest_framework import serializers
from .models import Envs


class EnvsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Envs
        fields = ('id', 'name', 'base_url', 'desc', 'create_time')
        extra_kwargs = {
            'create_time':
                {
                    'read_only': True

                }
        }


class EnvNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Envs
        fields = ('id', 'name')
