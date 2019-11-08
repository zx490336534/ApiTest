from django.contrib import admin
from projects.models import Projects


class ProjectsAdmin(admin.ModelAdmin):
    """定制后台管理站点类"""
    # 指定在修改(新增)中需要显示的字段
    fields = ('name', 'leader', 'tester', 'programer', 'publish_app')

    # 指定要列出的字段
    list_display = ['id', 'name', 'leader', 'tester']


admin.site.register(Projects, ProjectsAdmin)
