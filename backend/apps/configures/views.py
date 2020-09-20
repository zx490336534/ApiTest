import json

from rest_framework.decorators import action
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.response import Response
from .models import Configures
from .serializers import ConfiguresSerializer
from interfaces.models import Interfaces
from utils import handle_datas


class ConfiguresViewSet(ModelViewSet):
    """
    list:
    返回「多个」配置信息列表数据

    create:
    创建配置信息

    retrieve:
    返回「单个」配置信息详情数据

    update:
    「全」数据更新配置信息

    partial_update:
    「部分」数据更新配置信息

    destroy:
    删除配置信息

    retrieve:
    获取配置详情
    """
    queryset = Configures.objects.filter(is_delete=False)
    serializer_class = ConfiguresSerializer
    permission_classes = (permissions.IsAuthenticated,)
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()  # 逻辑删除

    def retrieve(self, request, *args, **kwargs):
        config_obj = self.get_object()
        config_request = json.loads(config_obj.request, encoding='utf-8')

        # 处理请求头数据
        config_headers = config_request['config']['request'].get('headers')
        config_headers_list = handle_datas.handle_data4(config_headers)

        # 处理全局变量数据
        config_variables = config_request['config'].get('variables')
        config_variables_list = handle_datas.handle_data2(config_variables)

        config_name = config_request['config']['name']
        selected_interface_id = config_obj.interface_id
        # 接口所属的项目ID
        selected_project_id = Interfaces.objects.get(id=selected_interface_id).project_id

        datas = {
            "author": config_obj.author,
            "configure_name": config_name,
            "selected_interface_id": selected_interface_id,
            "selected_project_id": selected_project_id,
            "header": config_headers_list,
            "globalVar": config_variables_list
        }

        return Response(datas)

    @action(methods=['get'], detail=False)
    def all(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @action(methods=['get'], detail=False)
    def all_interfaces_project(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        new_list = [dict(i) for i in serializer.data]
        new_data = {}
        new_data_all = [{
            "value": '全部项目',
            "label": '全部项目',
            "children": [{
                "value": '全部接口',
                "label": '全部接口',
            }]
        }]
        for i in new_list:
            project = i["interface"]['project']
            interface = i["interface"]['name']
            if project in new_data and interface not in new_data[project]:
                new_data[project].append(interface)
            else:
                new_data[project] = [interface]
        for k, v in new_data.items():
            new_data_all.append({
                "value": k,
                "label": k,
                "children": [{"value": j, "label": j} for j in v]
            })
        return Response(new_data_all)
