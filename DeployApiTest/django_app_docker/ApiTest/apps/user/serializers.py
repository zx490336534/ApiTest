# -*- coding:utf-8 -*-
"""
@Describe: serializers
@Author: zhongxin
@Time: 2019-10-29 23:02
@File: serializers.py
@Email: 490336534@qq.com
"""
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from rest_framework_jwt.settings import api_settings


class RegisterSerializer(serializers.ModelSerializer):
    password_conform = serializers.CharField(label='确认密码',
                                             min_length=6,
                                             max_length=20,
                                             write_only=True,
                                             help_text='确认密码',
                                             error_messages={'min_length': '仅允许6～20个字符的确认密码',
                                                             'max_length': '仅允许6～20个字符的确认密码'}
                                             )
    token = serializers.CharField(label='生成token',
                                  read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email', 'password_conform', 'token')
        extra_kwargs = {
            'username': {
                'label': '用户名',
                'help_text': '用户名',
                'min_length': 6,
                'max_length': 20,
                'error_messages': {'min_length': '仅允许6～20个字符的用户名',
                                   'max_length': '仅允许6～20个字符的用户名'}
            },
            'email': {
                'label': '邮箱',
                'help_text': '邮箱',
                'write_only': True,
                'required': True,
                'validators': [UniqueValidator(queryset=User.objects.all(), message='此邮箱已经被使用')]
            },
            'password': {
                'label': '密码',
                'help_text': '密码',
                'write_only': True,
                'min_length': 6,
                'max_length': 20,
                'error_messages': {'min_length': '仅允许6～20个字符的密码',
                                   'max_length': '仅允许6～20个字符的密码'}
            }
        }

    def validate(self, attrs):
        password = attrs.get('password')
        password_conform = attrs.get('password_conform')
        if password != password_conform:
            raise serializers.ValidationError('两次输入密码不一致')
        return attrs

    def create(self, validated_data):
        validated_data.pop('password_conform')
        user = User.objects.create_user(**validated_data)
        # user = super(RegisterSerializer, self).create(**validated_data)
        # user.set_password(validated_data['password'])
        # user.save()
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        user.token = token
        return user
