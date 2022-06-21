
FROM node:16-alpine
WORKDIR /usr/src/app
COPY . .
RUN yarn install && yarn build
EXPOSE 3000
CMD ["yarn", "dev"]