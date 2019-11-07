# -*- coding: utf-8 -*-
"""
-------------------------------------------------
  @Time : 2019/10/14 20:29 
  @Auth : 可优
  @File : serializer.py
  @IDE  : PyCharm
  @Motto: ABC(Always Be Coding)
  @Email: keyou100@qq.com
  @Company: 湖南省零檬信息技术有限公司
  @Copyright: 柠檬班
-------------------------------------------------
"""
from rest_framework import serializers

from interfaces.models import Interfaces
from projects.serializers import ProjectModelSerializer, ProjectSerializer


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
