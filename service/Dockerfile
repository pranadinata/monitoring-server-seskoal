FROM node:20.13.0-alpine3.19
RUN mkdir -p /opt/app/service_server
WORKDIR /opt/app/service_server
COPY service/package.json .
RUN npm install
COPY service . /opt/app/service_server/
EXPOSE 3200
CMD ["npm", "start"]

