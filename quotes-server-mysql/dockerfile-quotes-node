FROM centos:7
MAINTAINER irvingr 
RUN yum install epel-release -y
RUN yum install nodejs npm -y 
COPY ./package.json /root/package.json
COPY ./quote-server.js /root/quote-server.js
RUN cd ~ ; npm install
EXPOSE 18080
# CMD ["node", "/root/quote-server.js"]
