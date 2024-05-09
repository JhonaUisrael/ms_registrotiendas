FROM node:20.11.1-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY .env ./dist/
WORKDIR ./dist
#EXPOSE 3000
#
CMD ["npm","start"]
