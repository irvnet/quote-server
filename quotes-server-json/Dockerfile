FROM centos:7
MAINTAINER irvingr 
RUN yum install epel-release -y
RUN yum install nodejs npm -y 
COPY ./package.json /root/package.json
COPY ./app.js /root/app.js
COPY .real-quotes.json /root/real-quotes.json
RUN cd ~ ; npm install
EXPOSE 14000
# CMD ["node", "/root/app.js"]
