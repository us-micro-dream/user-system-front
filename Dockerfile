FROM node:14.2.0-alpine3.10

#切换npm源
RUN npm config set registry https://registry.npm.taobao.org

COPY ./ /app

WORKDIR /app

