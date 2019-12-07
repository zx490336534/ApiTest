from rest_framework import routers
from projects import views

# 1. 创建SimpleRouter路由对象
# router = routers.SimpleRouter()
router = routers.DefaultRouter()
# 2. 注册路由
# 第一个参数prefix为路由前缀, 一般添加为应用名即可
# 第二个参数viewset为视图集, 不要加as_view()
router.register(r'projects', views.ProjectsViewSet)

urlpatterns = [

]

urlpatterns += router.urls
