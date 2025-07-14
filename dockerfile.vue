FROM node:current-alpine3.22 as build
WORKDIR /app
COPY . .
ENV VITE_BASE_URL=http://localhost:3000
RUN npm install
RUN npm run build

FROM nginx:1.29.0-alpine-slim
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
