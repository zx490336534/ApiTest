from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from configures.models import Configures
from .models import Interfaces
from .serializer import InterfacesSerializer
from .utils import get_count_by_interface
from testcases.models import Testcases


class InterfacesViewSet(ModelViewSet):
    """
    list:
    返回接口(多个)列表数据

    create:
    创建接口

    retrieve:
    返回接口(单个)详情数据

    update:
    更新(全)接口

    partial_update:
    更新(部分)接口

    destroy:
    删除接口

    testcases:
    返回某个接口的所有用例信息(ID和名称)

    configures:
    返回某个接口的所有配置信息(ID和名称)
    """
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

    @action(methods=['get'], detail=True, url_path='configs')
    def configures(self, request, pk=None):
        configures_objs = Configures.objects.filter(interface_id=pk, is_delete=False)
        one_list = []
        for obj in configures_objs:
            one_list.append({
                'id': obj.id,
                'name': obj.name
            })
        return Response(data=one_list)

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data['results'] = get_count_by_interface(response.data['results'])
        return response
