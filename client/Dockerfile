FROM node:latest

WORKDIR /app

COPY . .

ENV REACT_APP_API_URL=http://localhost:4000

RUN yarn

CMD [ "yarn", "start" ]