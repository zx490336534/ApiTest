import os
from datetime import datetime

from django.conf import settings
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action

from testcases.models import Testcases
from .models import Testsuits
from envs.models import Envs
from .serializers import TestsuitsSerializer, TestsuitsRunSerializer
from .utils import modify_output, get_testcases_by_interface_ids
from backend.utils import common


class TestsuitsViewSet(ModelViewSet):
    """
    list:
    返回套件（多个）列表数据

    create:
    创建套件

    retrieve:
    返回套件（单个）详情数据

    update:
    更新（全）套件

    partial_update:
    更新（部分）套件

    destroy:
    删除套件

    run:
    通过套件来运行用例
    """
    queryset = Testsuits.objects.filter(is_delete=False)
    serializer_class = TestsuitsSerializer
    permission_classes = (permissions.IsAuthenticated, )
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()   # 逻辑删除

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data['results'] = modify_output(response.data['results'])

        return response

    def retrieve(self, request, *args, **kwargs):
        """获取用例详情信息"""
        # Testcase对象
        testsuit_obj = self.get_object()

        datas = {
            "name": testsuit_obj.name,
            "project_id": testsuit_obj.project_id,
            "include": testsuit_obj.include
        }
        return Response(datas)

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
        include = eval(instance.include)
        if len(include) == 0:
            data_dict = {
                "detail": "此套件下未添加用例, 无法运行!"
            }
            return Response(data_dict, status=status.HTTP_400_BAD_REQUEST)

        # 将include中的接口id转化为此接口下的用例id
        include = get_testcases_by_interface_ids(include)
        for testcase_id in include:
            testcase_obj = Testcases.objects.filter(is_delete=False, id=testcase_id).first()
            if testcase_obj:
                common.generate_testcase_files(testcase_obj, env, testcase_dir_path)

        return common.run_testcase(instance, testcase_dir_path)

    def get_serializer_class(self):
        """
        不同的action选择不同的序列化器
        :return:
        """
        return TestsuitsRunSerializer if self.action == 'run' else self.serializer_class
