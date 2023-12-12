FROM nginx:latest

LABEL maintainer="1695415918q@gmail.com"

USER root


RUN apt-get -yq update 
RUN apt-get install -y curl 
RUN apt-get install -y git
RUN apt-get install -y vim

WORKDIR  /usr/share/nginx

EXPOSE 89

Add /viteDocsCn/.vitepress/dist/ /usr/share/nginx/vite

Add /v3DocsCn/.vitepress/dist/ /usr/share/nginx/vue

ADD ./default.conf /etc/nginx/conf.d/default.conf

RUN echo 'start nginx!'

CMD ["nginx", "-g", "daemon off;"]