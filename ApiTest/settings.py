"""
Django settings for ApiTest project.

Generated by 'django-admin startproject' using Django 2.2.6.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.2/ref/settings/
"""
import sys
import os
import datetime

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE_DIR, 'apps'))
# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'r+43er(z)sj=+jvt+ehqhf5vomaib38^@y4-i9xo2#6rm1azcd'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# 允许用来访问web服务的IP地址或者域名,默认只允许通过127.0.0.1或者localhost来访问
ALLOWED_HOSTS = ["*"]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'corsheaders',
    'rest_framework',
    'django_filters',
    'drf_yasg',
    'projects.apps.ProjectsConfig',
    'interfaces.apps.InterfacesConfig',
    'user.apps.UserConfig',
    'configures.apps.ConfiguresConfig',
    'debugtalks.apps.DebugtalksConfig',
    'envs.apps.EnvsConfig',
    'reports.apps.ReportsConfig',
    'testsuits.apps.TestsuitsConfig',
    'testcases.apps.TestcasesConfig',
    'summary.apps.SummaryConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

]

ROOT_URLCONF = 'ApiTest.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')]
        ,
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'ApiTest.wsgi.application'

# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    # 'default': {
    #     'ENGINE': 'django.db.backends.sqlite3',
    #     'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    # }
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ApiTest',
        'USER': 'my_django',
        'PASSWORD': '123456',
        'HOST': 'localhost',
        'PORT': 3306
    }
}

# Password validation
# https://docs.djangoproject.com/en/2.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/2.2/topics/i18n/

LANGUAGE_CODE = 'zh-hans'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.2/howto/static-files/

STATIC_URL = '/static/'

LOGGING = {
    'version': 1,
    'disable_exising_loggers': False,
    'formatters': {
        'verbose': {
            'format': '%(asctime)s - [%(levelname)s] - [msg]%(message)s'
        },
        'simple': {
            'format': '%(asctime)s - [%(levelname)s] - %(name)s - [msg]%(message)s - [%(filename)s:%(lineno)d ]'
        },
    },
    'filters': {
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'file': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': os.path.join(BASE_DIR, 'logs/mytest.log'),  # 日志文件的位置
            'maxBytes': 100 * 1024 * 1024,
            'backupCount': 10,
            'formatter': 'verbose'
        },
    },
    'loggers': {
        'mytest': {  # 定义了一个名为mytest的日志器
            'handlers': ['console', 'file'],
            'propagate': True,
            'level': 'DEBUG'  # 日志器接收的最低日志级别
        }
    }
}
# 指定默认渲染类
REST_FRAMEWORK = {
    "DEFAULT_RENDERER_CLASSES": (
        # json渲染器为第一优先级
        "rest_framework.renderers.JSONRenderer",
        # 可浏览的API渲染为第二优先级
        "rest_framework.renderers.BrowsableAPIRenderer",
    ),
    'DEFAULT_FILTER_BACKENDS': [
        'rest_framework.filters.OrderingFilter',
        'django_filters.rest_framework.backends.DjangoFilterBackend'
    ],
    # 在全局指定分页的引擎
    # 'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    # 同时必须指定每页显示的条数
    'PAGE_SIZE': 10,
    'DEFAULT_PAGINATION_CLASS': 'utils.pagination.PageNumberPaginationManual',
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    # 'DEFAULT_PERMISSION_CLASSES': [
    #     'rest_framework.permissions.IsAuthenticated',
    # ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # 使用JWT Token认证
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        # Basic类型的认证（账号和密码）
        'rest_framework.authentication.SessionAuthentication',
        # Session会话认证
        'rest_framework.authentication.BasicAuthentication',
    ],
}

JWT_AUTH = {
    # 默认5分钟过期, 可以使用JWT_EXPIRATION_DELTA来设置过期时间
    'JWT_EXPIRATION_DELTA': datetime.timedelta(days=1),
    'JWT_RESPONSE_PAYLOAD_HANDLER':
        'utils.jwt_handler.jwt_response_payload_handler',
}

CORS_ORIGIN_ALLOW_ALL = True  # 所有域名都允许，默认False
# CORS_ORIGIN_WHITELIST = [
#     # 指定可以访问后端的域名
#     "http://127.0.0.1:8080",
#     "http://127.0.0.1:8000",
#     "http://localhost:8080",
#     "http://localhost:8000",
# ]
CORS_ALLOW_CREDENTIALS = True  # 语序跨域时携带Cookie，默认False

# 测试报告HTML文件所在目录
REPORTS_DIR = os.path.join(BASE_DIR, 'reports')

# 测试yaml文件所在目录
SUITES_DIR = os.path.join(BASE_DIR, 'suites')
