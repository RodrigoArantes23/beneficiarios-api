FROM node:12-alpine

WORKDIR /usr/app/beneficiario-service

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]