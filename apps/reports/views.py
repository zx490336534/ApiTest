import re
import os
from datetime import datetime

from django.conf import settings
from django.http import StreamingHttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions
from rest_framework.decorators import action

from reports.utils import format_output, get_file_contents
from .models import Reports
from .serializers import ReportsSerializer


class ReportsViewSet(ModelViewSet):
    """
    list:
    返回测试报告（多个）列表数据

    create:
    创建测试报告

    retrieve:
    返回测试报告（单个）详情数据

    update:
    更新（全）测试报告

    partial_update:
    更新（部分）测试报告

    destroy:
    删除测试报告

    """
    queryset = Reports.objects.filter(is_delete=False)
    serializer_class = ReportsSerializer
    permission_classes = (permissions.IsAuthenticated,)
    ordering_fields = ('id', 'name')

    def perform_destroy(self, instance):
        instance.is_delete = True
        instance.save()

    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)
        response.data['results'] = format_output(response.data['results'])
        return response

    @action(detail=True)
    def download(self, request, pk=None):
        instance = self.get_object()
        html = instance.html
        name = instance.name
        mtch = re.match(r'(.*_)\d+', name)
        if mtch:
            mtch = mtch.group(1) + datetime.strftime(datetime.now(), '%Y%m%d%H%M%S') + '.html'
        report_dir = os.path.join(settings.BASE_DIR, 'reports')
        report_path = os.path.join(report_dir, mtch)
        with open(report_path, 'w') as f:
            f.write(html)
        response = StreamingHttpResponse(get_file_contents(report_path))
        response['Content-Type'] = "application/octet-stream"
        response['Content-Disposition'] = "attachment; filename*=UTF-8''{}".format(name)
        return response
