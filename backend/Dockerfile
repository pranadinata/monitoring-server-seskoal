FROM node:20.13.0-alpine3.19
RUN mkdir -p /opt/app/express
WORKDIR /opt/app/express
COPY backend/package.json .
# Note: Puppeteer needs additional dependencies to run; we include those as well.
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgdk-pixbuf2.0-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# If you're using Puppeteer, skip downloading Chromium by setting PUPPETEER_SKIP_CHROMIUM_DOWNLOAD
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
RUN npm install
COPY backend . /opt/app/express/
EXPOSE 3300
CMD [ "npm", "start"]
