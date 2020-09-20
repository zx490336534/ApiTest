# -*- coding:utf-8 -*-
"""
@Describe: serializers
@Author: zhongxin
@Time: 2019-11-12 23:44
@File: serializers.py
@Email: 490336534@qq.com
"""
from rest_framework import serializers
from interfaces.models import Interfaces
from utils import validates
from .models import Testcases


class InterfacesAnotherSerializer(serializers.ModelSerializer):
    project = serializers.StringRelatedField()
    # 项目ID
    pid = serializers.IntegerField(write_only=True, validators=[validates.whether_existed_project_id])
    # 接口ID
    iid = serializers.IntegerField(write_only=True, validators=[validates.whether_existed_interface_id])

    class Meta:
        model = Interfaces
        fields = ('iid', 'name', 'project', 'pid')
        extra_kwargs = {
            'name': {
                'read_only': True
            }
        }

    def validate(self, attrs):
        """
        校验项目ID是否与接口ID一致
        :param attrs:
        :return:
        """
        if not Interfaces.objects.filter(id=attrs['iid'], project_id=attrs['pid'], is_delete=False).exists():
            raise serializers.ValidationError("项目和接口信息不对应!")
        return attrs


class TestcasesSerializer(serializers.ModelSerializer):
    """
    用例序列化器
    """
    interface = InterfacesAnotherSerializer(help_text="所属接口和项目信息")

    class Meta:
        model = Testcases
        fields = ('id', 'name', 'interface', 'include', 'author', 'request')
        extra_kwargs = {
            'include': {
                'write_only': True
            },
            'request': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        interface_dict = validated_data.pop('interface')
        validated_data['interface_id'] = interface_dict['iid']
        return Testcases.objects.create(**validated_data)

    def update(self, instance, validated_data):
        if 'interface' in validated_data:
            interface_dict = validated_data.pop('interface')
            validated_data['interface_id'] = interface_dict['iid']
        return super().update(instance, validated_data)


class TestcasesRunSerializer(serializers.ModelSerializer):
    """
    运行测试用例序列化器
    """
    env_id = serializers.IntegerField(write_only=True,
                                      help_text='环境变量ID',
                                      validators=[validates.whether_existed_env_id])

    class Meta:
        model = Testcases
        fields = ('id', 'env_id')


class ProjectInterfaceSerializer(serializers.ModelSerializer):
    interface = InterfacesAnotherSerializer(help_text="所属接口和项目信息")

    class Meta:
        model = Testcases
        fields = ('interface',)
