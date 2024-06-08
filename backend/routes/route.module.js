require('express-router-group');
const express = require('express');

const router = express.Router();

const arduinoController = require('../services/micro-controller/arduino.controller');


router.get('/', (req, res)=> {
    res.json({
        name: 'Backend Aplikasi Micro Controller',
        version: 1.0
    });
});

router.group('/whatsapp', function (route) {
    route.post('/get-temperature', arduinoController.getTemperature);
    route.post('/get-humadity', arduinoController.getHumadity);

    // route.post('/send-notify', arduinoController.sendNotifyToWhatsApp);
});


module.exports = router