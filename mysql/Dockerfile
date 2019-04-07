FROM mysql:5

ENV MYSQL_DATABASE banking
ENV MYSQL_ROOT_PASSWORD root

EXPOSE 3306

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
