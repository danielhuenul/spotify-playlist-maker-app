FROM node:14-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY dist ./dist

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder app/dist .
COPY --from=builder app/dist .
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf_original
COPY --from=builder /app/nginx.conf /etc/nginx/

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
