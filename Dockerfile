FROM node:18

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

RUN yarn install dev 

RUN yarn install --production

EXPOSE 5173

CMD [ "yarn","dev" ]