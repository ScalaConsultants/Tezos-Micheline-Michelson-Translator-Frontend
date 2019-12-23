FROM node:11.13.0-alpine AS builder

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# create runtime container
FROM node:11.13.0-alpine
RUN apk update && apk upgrade
RUN mkdir -p /usr/src/app && chown node:node /usr/src/app
WORKDIR /usr/src/app

# copy files from builder (note .dockerignore in repo)
COPY --from=builder --chown=node:node /usr/src/app/build/ .

# expose 5000 on container
EXPOSE 5000

# start the app
RUN yarn global add serve
CMD ["serve", "-s", "."]
