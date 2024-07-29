require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const { Client, NoAuth ,LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require("fs");
const cors = require('cors');
const arduinoService = require('./services/micro-controller/arduino.controller');


const app = express();
const port = process.env.APP_PORT || 3300;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

global.client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    authStrategy: new LocalAuth()
    // authStrategy: new NoAuth()
});

global.authed = false;

// When the client is ready, run this code (only once)
client.once('ready', async () => {
    try {
        await arduinoService.sendWhatsapp
        console.log('Client is ready!');
    } catch (error) {
        console.error('Error during ready event:', error);
    }
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    fs.writeFileSync("./services/last.qr", qr);
    console.log('QR RECEIVED', qr);
});


client.on('message', async message => {
    try {
        if (message.body === '!ping') {
            await client.sendMessage(message.from, 'pong');
        }
        console.log(message.body);
    } catch (error) {
        console.error('Error handling message:', error);
    }
});


// Start your client
// client.initialize();

client.on("disconnected", () => {
   

    // fs.unlink(filePath, (err) => {
    //     if (err) {
    //       console.error(`Error removing file: ${err}`);
    //       return;
    //     }
      
    //     console.log(`File ${filePath} has been successfully removed.`);
    //   });
    console.log("disconnected");
    // initializeClient();
    // process.exit(1);
});


client.on('loading_screen', (percent, message) => {
    console.log('LOADING SCREEN', percent, message);
});

async function initializeClient(retries = 3) {
    while (retries > 0) {
        try {
            await client.initialize();
            return;
        } catch (error) {
            console.error('Error initializing client:', error);
            retries -= 1;
            if (retries > 0) {
                console.log(`Retrying... (${retries} attempts left)`);
            } else {
                throw new Error('Failed to initialize client after multiple attempts');
            }
        }
    }
}



initializeClient().catch(error => {
    console.error('Client initialization failed:', error);
});

const authRoute = require("./services/auth");
const chatRoute = require("./services/chatting");
const Router = require('./routes/route.module');

app.use("/auth", authRoute);
app.use("/chat", chatRoute);

app.use('/', Router);


app.listen(port,'0.0.0.0', () => {
    console.log("Server Running Live on Port : " + port);
});

