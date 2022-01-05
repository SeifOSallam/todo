FROM mongo:4

WORKDIR /app

RUN mkdir Mongo_Data

RUN chmod go+w Mongo_Data

EXPOSE 27017

CMD [ "mongod" , "--dbpath" , "Mongo_Data"]