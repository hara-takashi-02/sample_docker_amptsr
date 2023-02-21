FROM php:8.0-apache

# COPY php.ini
#COPY ./docker/php/php.ini /usr/local/etc/php/php.ini

RUN cd /etc/apache2/mods-enabled \
    && ln -s ../mods-available/rewrite.load

# 設定ファイルをdockerコンテナ内のPHP、Apacheに読み込ませる
ADD ./docker/php/php.ini /usr/local/etc/php/
ADD ./docker/php/000-default.conf /etc/apache2/sites-enabled/

# Composer install
COPY --from=composer:2.0 /usr/bin/composer /usr/bin/composer

# install Node.js
COPY --from=node:lts /usr/local/bin /usr/local/bin
COPY --from=node:lts /usr/local/lib /usr/local/lib

RUN apt-get update && \
    apt-get -y install \
    git \
    zip \
    unzip \
    vim \
    && docker-php-ext-install pdo_mysql bcmath

#RUN npm install -g @vue/cli && \
#    @vue/cli-init && \
#    vue create hello-vue

WORKDIR /var/www/html