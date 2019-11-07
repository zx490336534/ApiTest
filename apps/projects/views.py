from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from . import serializers
from .models import Projects
from .utils import get_count_by_project
from interfaces.models import Interfaces


class ProjectsViewSet(ModelViewSet):
    """
    list:
    返回项目（多个）列表数据

    create:
    创建项目

    retrieve:
    返回项目（单个）详情数据

    update:
    更新（全）项目

    partial_update:
    更新（部分）项目

    destroy:
    删除项目

    names:
    返回所有项目ID和名称

    interfaces:
    返回某个项目的所有接口信息（ID和名称）
    """
    queryset = Projects.objects.filter(is_delete=False)
    serializer_class = serializers.ProjectModelSerializer
    permission_classes = (permissions.IsAuthenticated,)
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()  # 逻辑删除

    @action(methods=['get'], detail=False)
    def names(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = serializers.ProjectNameSerializer(instance=queryset, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=True)
    def interfaces(self, request, pk=None):
        interface_objs = Interfaces.objects.filter(project_id=pk, is_delete=False)
        one_list = []
        for obj in interface_objs:
            one_list.append({
                'id': obj.id,
                'name': obj.name
            })
        return Response(data=one_list)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            datas = serializer.data
            datas = get_count_by_project(datas)
            return self.get_paginated_response(datas)

        serializer = self.get_serializer(queryset, many=True)
        datas = serializer.data
        datas = get_count_by_project(datas)
        return Response(datas)
