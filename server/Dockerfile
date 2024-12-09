FROM node:latest

WORKDIR /app

COPY . .

RUN yarn

ENV MONGO_URI=mongodb://root:password@mongo:27017/todo?authSource=admin

EXPOSE 4000

CMD ["yarn", "start"]