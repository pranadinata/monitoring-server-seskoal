FROM node:20.13.0-alpine3.19
RUN mkdir -p /opt/app/express
WORKDIR /opt/app/express
COPY backend/package.json .
RUN npm install
COPY backend . /opt/app/express/
EXPOSE 3300
CMD [ "npm", "start"]
