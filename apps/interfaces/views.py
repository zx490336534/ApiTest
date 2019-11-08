from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Interfaces
from .serializer import InterfacesSerializer
from .utils import get_count_by_interface
from testcases.models import Testcases


class InterfacesViewSet(ModelViewSet):
    queryset = Interfaces.objects.filter(is_delete=False)
    serializer_class = InterfacesSerializer
    permission_classes = (permissions.IsAuthenticated,)
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()

    @action(methods=['get'], detail=True)
    def testcases(self, request, pk=None):
        testcase_objs = Testcases.objects.filter(interface_id=pk, is_delete=False)
        one_list = []
        for obj in testcase_objs:
            one_list.append({
                'id': obj.id,
                'name': obj.name
            })
        return Response(data=one_list)

    def list(self, request, *args, **kwargs):
        response = super(InterfacesViewSet, self).list(request, *args, **kwargs)
        response.data['results'] = get_count_by_interface(response.data['results'])
        return response
