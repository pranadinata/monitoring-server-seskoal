FROM node:21.7.3-alpine3.20

# Membuat direktori kerja
RUN mkdir -p /opt/app/express
WORKDIR /opt/app/express

# Menyalin dan menginstal dependensi npm
COPY backend/package.json .
RUN npm install

# Menambahkan library yang dibutuhkan oleh Puppeteer
RUN apk update && apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

# Menyetel variable environment untuk Chromium dan Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Menyalin seluruh file backend
COPY backend /opt/app/express/

# Mengekspos port yang diperlukan
EXPOSE 3300

# Menjalankan aplikasi menggunakan npm
CMD [ "npm", "start" ]
