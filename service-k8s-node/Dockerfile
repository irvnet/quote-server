FROM centos:7
MAINTAINER irvingr 
RUN yum install epel-release -y
RUN yum install nodejs npm -y 
# COPY ./package.json /root/package.json
COPY ./simple-server.js /root/simple-server.js
# RUN cd ~ ; npm install
EXPOSE 18080
CMD ["node", "/root/simple-server.js"]
