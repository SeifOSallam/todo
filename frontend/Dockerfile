FROM node

WORKDIR /app

COPY package*.json ./

COPY angular.json ./

COPY tsconfig*.json ./

RUN npm install

RUN npm install @angular/cli

COPY . .

RUN chmod -R 775 /app

EXPOSE 4200

CMD [ "npm" , "start" ]