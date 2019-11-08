from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from envs.models import Envs
from envs.serializers import EnvsSerializer, EnvNameSerializer
from envs.utils import handle_env


class EnvsViewSet(ModelViewSet):
    queryset = Envs.objects.filter(is_delete=False)
    serializer_class = EnvsSerializer
    permission_classes = (permissions.IsAuthenticated,)
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data['results'] = handle_env(response.data['results'])
        return response

    @action(methods=['get'], detail=False)
    def names(self, request, pk=None):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def get_serializer_class(self):
        if self.action == 'names':
            return EnvNameSerializer
        else:
            return EnvsSerializer
