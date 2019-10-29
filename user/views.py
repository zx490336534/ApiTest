from rest_framework.generics import CreateAPIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from user.serializers import RegisterSerializer


class RegisterView(CreateAPIView):
    serializer_class = RegisterSerializer
    authentication_classes = (JSONWebTokenAuthentication,)
