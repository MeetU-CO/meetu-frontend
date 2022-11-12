#Build of react project
FROM node:16-alpine AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
COPY . .
RUN npm run build

#Creating NGINX server
FROM nginx:1.19.0-alpine AS prod-stage
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]