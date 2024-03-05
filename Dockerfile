FROM node:20.11.1-alpine3.19

WORKDIR /app

COPY . ./
RUN apk update

CMD ["yarn", "dev", "--host"]
