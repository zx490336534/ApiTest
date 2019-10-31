from django.contrib.auth.models import User
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from user.serializers import RegisterSerializer


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = (JSONWebTokenAuthentication,)


class UsernameValidateView(APIView):
    """
    校验用户名
    """

    def get(self, request, username):
        data_dict = {
            "username": username,
            "count": User.objects.filter(username=username).count()
        }
        return Response(data_dict)


class EmailValidateView(APIView):
    def get(self, request, email):
        data_dict = {
            "email": email,
            "count": User.objects.filter(email=email).count()
        }
        return Response(data_dict)
