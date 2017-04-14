#!/bin/bash

#Arret de tous les container
docker container kill $(docker ps -a -q)
docker container rm $(docker ps -a -q)

#Installation mongodb
docker pull tutum/mongodb
docker build -t tutum/mongodb
#Installation de node
docker build -t node server
#Installation de httpd
docker build -t web web
#Lancement du serveur
docker run -d -p 27017:27017 tutum/mongodb mongod --smallfiles \
&& sleep 10 &&  docker run -d -p 1337:1337 node \
&& sleep 20 && docker run -p 8080:80 web




