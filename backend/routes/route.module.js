require('express-router-group');
const express = require('express');

const router = express.Router();

const arduinoService = require('../services/micro-controller/arduino.controller');
const authService = require('../services/apps/auth.controller');
const getDataService = require('../services/apps/getData.controller');
const crudService = require('../services/apps/crud.controller');


router.get('/', (req, res)=> {
    res.json({
        name: 'Backend Aplikasi Micro Controller',
        version: 1.0
    });
});

router.group('/whatsapp', function (route) {
    route.post('/get-temperature', arduinoService.getTemperature);
    route.get('/send-notify', arduinoService.sendWhatsapp);
});

router.group('/apps', function (route) {
    route.post('/auth/login', authService.postLogin);


    //get data from db
    route.get('/phone-book/show', getDataService.getPhoneBook);
    route.get('/sensor-detail/show', getDataService.getSensorDetail);
    route.get('/suhu-humadity/show', getDataService.getSuhuHumadity);

    
    //crud phone book 
    route.post('/phone-book/create', crudService.createPhoneBook);
    route.post('/phone-book/delete', crudService.deletePhoneBook);
    route.post('/phone-book/update', crudService.updatePhoneBook);


    //update sensor detail
    route.post('/sensor-detail/update', crudService.updateSensorDetail);

    //update suhu humadity
    route.post('/suhu-humadity/update', crudService.updateSuhuHumadity);

    //get notifikasi
    route.get('/count/notifikasi', getDataService.getCountNotif);



});



module.exports = router