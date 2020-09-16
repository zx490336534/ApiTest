# -*- coding: utf-8 -*-
from rest_framework import serializers
from .models import Testsuits
from projects.models import Projects
from utils import validates


class TestsuitsSerializer(serializers.ModelSerializer):
    """
    套件序列化器
    """
    project = serializers.StringRelatedField(help_text='项目名称')
    project_id = serializers.PrimaryKeyRelatedField(queryset=Projects.objects.all(), help_text='项目ID')

    class Meta:
        model = Testsuits
        fields = ('id', 'name', 'project', 'project_id', 'include', 'create_time', 'update_time')

        extra_kwargs = {
            'create_time': {
                'read_only': True
            },
            'update_time': {
                'read_only': True
            },
            'include': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        project = validated_data.pop('project_id')
        validated_data['project'] = project
        testsuit = Testsuits.objects.create(**validated_data)
        return testsuit

    def update(self, instance, validated_data):
        if 'pid' in validated_data:
            pid = validated_data.pop('pid')
            validated_data['project_id'] = pid

        return super().update(instance, validated_data)


class TestsuitsRunSerializer(serializers.ModelSerializer):
    """
    通过套件来运行测试用例序列化器
    """
    env_id = serializers.IntegerField(write_only=True,
                                      help_text='环境变量ID',
                                      validators=[validates.whether_existed_env_id])

    class Meta:
        model = Testsuits
        fields = ('id', 'env_id')

