FROM node:0.10.32

MAINTAINER Siddhartha Lahiri "siddhartha.lahiri@gmail.com"

RUN mkdir /home/mock
WORKDIR /home/mock

ADD . /home/mock

RUN npm install
