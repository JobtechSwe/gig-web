# build
FROM node:8.12-alpine as builder

WORKDIR /builder

ENV NODE_ENV=${NODE_ENV:-}
ENV REACT_APP_GOOGLE_MAPS_API_KEY=${REACT_APP_GOOGLE_MAPS_API_KEY:-}
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST:-}

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
