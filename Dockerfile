FROM node:14.2.0-stretch


#国内源
RUN npm i tyarn -g

RUN tyarn -v

#安装umi
RUN tyarn global add umi
RUN umi -v

WORKDIR /app

COPY ./ /app

