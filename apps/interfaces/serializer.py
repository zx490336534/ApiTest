# -*- coding: utf-8 -*-
from rest_framework import serializers

from interfaces.models import Interfaces
from projects.models import Projects
from projects.serializers import ProjectModelSerializer


class InterfaceModelSerializer(serializers.ModelSerializer):
    # 1. 数据库模型中的外键字段, 默认会生成PrimaryKeyRelatedField序列化器字段
    # 序列化输出的值为外键ID值

    # 2. StringRelatedField, 此字段将被序列化为关联对象字符串表达形式(即__str__方法返回值 )
    # project = serializers.StringRelatedField(label='所属项目')

    # 3. SlugRelatedField, 此字段将被序列化为关联对象的指定字段数据
    # project = serializers.SlugRelatedField(slug_field='tester', read_only=True)

    # 4. 使用关联对象的序列化器
    project = ProjectModelSerializer(label='所属项目', read_only=True)

    class Meta:
        model = Interfaces
        fields = '__all__'


class InterfacesSerializer(serializers.ModelSerializer):
    project = serializers.StringRelatedField(label='项目名称')
    project_id = serializers.PrimaryKeyRelatedField(queryset=Projects.objects.all(), help_text='项目ID')

    class Meta:
        model = Interfaces
        fields = ('id', 'name', 'tester', 'project', 'project_id', 'desc', 'create_time')
        extra_kwargs = {
            'create_time': {
                'read_only': True
            }
        }

    def create(self, validated_data):
        project = validated_data.pop('project_id')
        validated_data['project'] = project
        interface = Interfaces.objects.create(**validated_data)
        return interface

    def update(self, instance, validated_data):
        if 'project_id' in validated_data:
            project = validated_data.pop('project_id')
