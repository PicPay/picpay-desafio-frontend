FROM node:10.15.3-alpine
MAINTAINER "PicPay"

ARG username=picpay
ARG workdir=./
ARG uid

EXPOSE 4200/tcp

RUN deluser node
RUN mkdir -p $workdir \
    && adduser -h $workdir -u 1000 -D $username \
    && npm install -g @angular/cli@8.3.18 @angular/core@8.2.13

USER 1000
WORKDIR $workdir
CMD /bin/sh
CMD npm install

