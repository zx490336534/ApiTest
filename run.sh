mkdir /nginx/logs
mkdir /nginx/web/
mkdir /mysql_db/
docker-compose down
docker-compose up --force-recreate --build -d