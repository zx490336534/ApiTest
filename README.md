# 基于HttpRunner 2.x的接口测试平台
实例地址:[http://123.56.13.233:8866/](http://123.56.13.233:8866/)

![登录页](./img/登录页.png)

![首页](./img/首页.png)

![报告页面](./img/报告页面.png)

## 本地运行
0. 全局搜索`123.56.13.233`,将该地址修改为需要部署的IP或者`127.0.0.1`

1. 安装python运行环境
```shell
cd /backend
pip install -r requirements.txt
```
2. 数据库创建
```shell
CREATE DATABASE IF NOT EXISTS test DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;
```

3. 修改连接设置
找到backend/ApiTest/settings.py中的`DATABASES`
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'test',
        'USER': '你数据库连接的账号',
        'PASSWORD': '你数据库连接的密码',
        'HOST': '你的IP地址',
        'PORT': 3306
    }
}
```
修改其中的连接地址、账号、密码

4. 数据库迁移
```shell
python manage.py migrate
```

5. 运行
```shell
python manage.py runserver
```

6. 前端安装
进入frontend
```shell
npm install
```

7. 运行前端
```shell
npm run serve
```

## 部署方式
1. 修改部署的IP
> 全局搜索`123.56.13.233`,将该地址修改为需要部署的IP

2. 在项目根路径下运行
```shell
sh run.sh
```

## 使用方法

1. 在`项目管理`中进行`项目新增`
2. 在`环境管理`中进行`环境新增`
3. 在`接口管理`中进行`接口新增`
4. 在`用例管理`中进行`用例新增`
5. 在`项目管理`中运行测试
6. 在`报告管理`中查看执行结果

最小单位是`用例`,每个用例都可以单独执行进行测试

`接口`可以由多个用例组成

`项目`可以由多个`接口`组成

## 更新
前端有变更需要修改`/var/lib/docker/volumes/apitest_online_web/_data`中的文件

