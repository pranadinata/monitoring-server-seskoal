require('express-router-group');
const express = require('express');

const router = express.Router();

const arduinoService = require('../services/micro-controller/arduino.controller');
const authService = require('../services/apps/auth.controller');
const getDataService = require('../services/apps/getData.controller');




router.get('/', (req, res)=> {
    res.json({
        name: 'Backend Aplikasi Micro Controller',
        version: 1.0
    });
});

router.group('/whatsapp', function (route) {
    route.post('/get-temperature', arduinoService.getTemperature);
    route.post('/get-humadity', arduinoService.getHumadity);
    // route.post('/send-notify', arduinoController.sendNotifyToWhatsApp);
});

router.group('/apps', function (route) {
    route.post('/auth/login', authService.postLogin);


    //get data from db
    route.get('/phone-book/show', getDataService.getPhoneBook);
    route.get('/sensor-detail/show', getDataService.getSensorDetail);

});



module.exports = router