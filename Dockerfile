# build
FROM node:8.12-alpine as builder

WORKDIR /builder

COPY package* ./
RUN npm install -s

COPY public ./public
COPY src ./src

RUN npm run build

# main
FROM node:8.12-alpine as main

WORKDIR /main

COPY package* ./
RUN npm install -s --only=production

COPY --from=builder /builder/build /main/app

CMD node_modules/.bin/serve -s app
