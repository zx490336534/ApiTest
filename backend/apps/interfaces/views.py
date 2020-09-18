import os
from datetime import datetime

from django.conf import settings
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from .models import Interfaces
from .serializers import InterfacesSerializer, InterfaceRunSerializer
from .utils import get_count_by_interface
from testcases.models import Testcases
from configures.models import Configures
from envs.models import Envs
from utils import common


class InterfacesViewSet(ModelViewSet):
    """
    list:
    返回「多个」接口列表数据

    create:
    创建接口

    retrieve:
    返回「单个」接口详情数据

    update:
    更新「全」接口

    partial_update:
    更新「部分」接口

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
        testcase_objs = Testcases.objects.filter(is_delete=False, interface=instance)
        if not testcase_objs.exists():  # 如果此接口下没有用例, 则无法运行
            data_dict = {
                "detail": "此接口下无用例, 无法运行!"
            }
            return Response(data_dict, status=status.HTTP_400_BAD_REQUEST)

        for one_obj in testcase_objs:
            common.generate_testcase_files(one_obj, env, testcase_dir_path)

        # 运行用例
        return common.run_testcase(instance, testcase_dir_path)

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data['results'] = get_count_by_interface(response.data['results'])
        return response

    def get_serializer_class(self):
        """
        不同的action选择不同的序列化器
        :return:
        """
        return InterfaceRunSerializer if self.action == 'run' else self.serializer_class
