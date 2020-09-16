import os
from datetime import datetime
from django.conf import settings
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from . import serializers
from .models import Projects
from .utils import get_count_by_project
from interfaces.models import Interfaces
from testcases.models import Testcases
from envs.models import Envs
from backend.utils import common


class ProjectsViewSet(ModelViewSet):
    """
    list:
    返回项目(多个)列表数据

    create:
    创建项目

    retrieve:
    返回项目(单个)详情数据

    update:
    更新(全)项目

    partial_update:
    更新(部分)项目

    destroy:
    删除项目

    names:
    返回所有项目ID和名称

    interfaces:
    返回某个项目的所有接口信息(ID和名称)
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
        serializer = self.get_serializer(instance=queryset, many=True)
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
        response = super().list(request, *args, **kwargs)
        response.data['results'] = get_count_by_project(response.data['results'])
        return response

    @action(methods=['post'], detail=True)
    def run(self, request, pk=None):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        datas = serializer.validated_data
        env_id = datas.get('env_id')  # 获取环境变量env_id

        # 创建测试用例所在目录名
        testcase_dir_path = os.path.join(settings.SUITES_DIR,
                                         datetime.strftime(datetime.now(), "%Y%m%d%H%M%S%f"))
        if not os.path.exists(testcase_dir_path):
            os.mkdir(testcase_dir_path)

        env = Envs.objects.filter(id=env_id, is_delete=False).first()
        interface_objs = Interfaces.objects.filter(is_delete=False, project=instance)

        if not interface_objs.exists():  # 如果此项目下没有接口, 则无法运行
            data_dict = {
                "detail": "此项目下无接口, 无法运行!"
            }
            return Response(data_dict, status=status.HTTP_400_BAD_REQUEST)

        for inter_obj in interface_objs:
            testcase_objs = Testcases.objects.filter(is_delete=False, interface=inter_obj)

            for one_obj in testcase_objs:
                common.generate_testcase_files(one_obj, env, testcase_dir_path)

        # 运行用例
        return common.run_testcase(instance, testcase_dir_path)

    def get_serializer_class(self):
        if self.action == 'names':
            return serializers.ProjectNameSerializer
        else:
            return self.serializer_class
