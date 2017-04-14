FROM node
#RUN mkdir /usr/server && apt-get update && apt-get upgrade
COPY Back /usr/server
CMD cd /usr/server && npm install && node app.js
