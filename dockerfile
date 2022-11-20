FROM node:14-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY dist ./dist

ENV PORT=8080
EXPOSE 8080
ENTRYPOINT [ "node", "server.js" ]
