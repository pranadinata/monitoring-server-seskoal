FROM node:21.7.3-alpine3.20

#membuat work directory
RUN mkdir -p /opt/app/nextjs

#menyalin work directory
WORKDIR /opt/app/nextjs
COPY frontend/package.json .

#menginstall node_modules pada directory 
RUN npm install

# Menyalin seluruh file backend
COPY frontend . /opt/app/nextjs/

#expose port 3100 
EXPOSE 3100

#build frontend apps 
RUN npm run build
CMD ["npm", "start"]