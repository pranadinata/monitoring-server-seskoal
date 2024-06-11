require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const axios = require("axios");
const { Client, NoAuth  } = require("whatsapp-web.js");
const qrcode = require('qrcode-terminal');
const cors = require('cors');


const app = express();
const port = process.env.APP_PORT || 3300;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.client = new Client({
    webVersionCache: {
        type: "remote",
        remotePath:
          "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
      },
    puppeteer: {headless: true, args: [ '--no-sandbox' ], }
});

global.authed = false;

client.on("qr", (qr) => {
    console.log("QR Client");
    fs.writeFileSync("./services/last.qr", qr);
    qrcode.generate(qr, {small: true});
    // GlobalFunction.SendQr(qr);
});

client.on("auth_failure", () => {
    console.log("AUTH Failed !");
});

client.on("ready", (result) => {
    console.log("Client is ready!");
});

client.on("message", async (msg) => {
    
    // GlobalFunction.StoreMessage(msg);
    // if (config.webhook.enabled) {
        
    //     if (msg.hasMedia) {  
    //         const attachmentData = await msg.downloadMedia();
    //         msg.attachmentData = attachmentData;
    //     }
    //     axios.post(config.webhook.path, { msg });
    // }
});

client.on("disconnected", () => {
    console.log("disconnected");
    process.exit(1);
});

client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

client.initialize().catch(error => {
    console.error('Error initializing client:', error);
});

const authRoute = require("./services/auth");
const chatRoute = require("./services/chatting");

app.use("/auth", authRoute);
app.use("/chat", chatRoute);

const Router = require('./routes/route.module');
app.use('/', Router);


app.listen(port,'0.0.0.0', () => {
    console.log("Server Running Live on Port : " + port);
});

