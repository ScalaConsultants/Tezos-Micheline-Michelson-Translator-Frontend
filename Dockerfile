FROM mhart/alpine-node:10 AS builder

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

ARG REACT_APP_API_URL
ARG REACT_APP_RECAPTCHA_SITE_KEY

WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
RUN yarn build && yarn --production

FROM mhart/alpine-node:10
WORKDIR /app
COPY --from=builder /app .
EXPOSE 5000
CMD ["node_modules/.bin/next", "start", "-p", "5000"]
