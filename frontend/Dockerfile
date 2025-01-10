FROM node:20.13.0-alpine3.19

# Membuat direktori untuk aplikasi
RUN mkdir -p /opt/app/nextjs
WORKDIR /opt/app/nextjs

# Menyalin package.json dan package-lock.json
COPY frontend/package.json .
COPY frontend/package-lock.json .

# Install dependensi
RUN npm install

# Menyalin seluruh aplikasi ke dalam container
COPY frontend . /opt/app/nextjs/

# Mengekspos port aplikasi
EXPOSE 3100

# Membangun aplikasi Next.js
RUN npm run build

# Menjalankan aplikasi Next.js
CMD ["npm", "start"]
