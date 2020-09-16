# -*- coding:utf-8 -*-
"""
@Describe: serializers
@Author: zhongxin
@Time: 2019-11-12 07:35
@File: serializers.py
@Email: 490336534@qq.com
"""
from datetime import datetime
from rest_framework import serializers
from .models import Reports


class ReportsSerializer(serializers.ModelSerializer):
    """
    报告序列化器
    """

    class Meta:
        model = Reports
        exclude = ('update_time', 'is_delete')
        extra_kwargs = {
            'html': {
                'write_only': True
            },
            'create_time': {
                'read_only': True
            }
        }

    def create(self, validated_data):
        report_name = validated_data['name']
        validated_data['name'] = f"{report_name}_{datetime.strftime(datetime.now(), '%Y%m%d%H%M%S')}"
        report = Reports.objects.create(**validated_data)
        return report
