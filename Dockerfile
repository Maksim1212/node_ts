FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

COPY ormconfig_prod.json ./ormconfig.json

COPY tsconfig.json tsconfig.json

RUN npm install

COPY . . 

RUN npm run build  

EXPOSE 3000

CMD [ "npm", "start" ]
