FROM node:latest

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

ADD . .

EXPOSE 8080

CMD nodemon index.js
