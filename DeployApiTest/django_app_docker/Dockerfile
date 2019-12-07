FROM python:3-alpine
LABEL maintainer='490336534@qq.com'
LABEL description='Deploying Django project'

WORKDIR /usr/src/app
COPY ./ApiTest ./ApiTest/
COPY ./gunicorn_config.py ./configs/
COPY ./docker-entrypoint.sh /entrypoint.sh

WORKDIR /usr/src/app/ApiTest/
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories && \
    apk upgrade && \
    apk add --allow-untrusted build-base mariadb-connector-c-dev curl iputils && \
    apk update && apk upgrade && \
    pip install --no-cache-dir -i https://pypi.douban.com/simple -r requirements.txt && \
    pip install -i https://pypi.douban.com/simple gunicorn && \
    apk add ca-certificates bash && \
	rm -rf /var/cache/apk/* && \
    chmod 777 /entrypoint.sh

VOLUME /usr/src/app/logs/
VOLUME /usr/src/app/ApiTest/

EXPOSE 8000
ENTRYPOINT ["/entrypoint.sh"]