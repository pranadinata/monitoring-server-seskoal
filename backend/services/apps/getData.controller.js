
const { phone_book, notification_v2 , sensor_detail , suhu_humadity, set_notif} = require('../../database/models');


function getPhoneBook(req, res){
    phone_book.findAll({
        order: [
            ['id', 'ASC'],
        ],
    }).then((result) => {
        res.status(200).json({
            data: {
                 status: 'success',
                 data: result,
                 code: 200,
                 message: 'Berhasil mengambil data!',
             }
           });
    });
}
function getSensorDetail(req, res){
    sensor_detail.findAll({
        order: [
            ['id', 'ASC'],
        ],
    }).then((result) => {
        res.status(200).json({
            data: {
                 status: 'success',
                 data: result,
                 code: 200,
                 message: 'Berhasil mengambil data!',
             }
           });
    });
}

function getSuhuHumadity(req, res){
    suhu_humadity.findAll({
        order: [
            ['id', 'ASC'],
        ],
    }).then((result) => {
        res.status(200).json({
            data: {
                 status: 'success',
                 data: result,
                 code: 200,
                 message: 'Berhasil mengambil data!',
             }
           });
    });
}

function getCountNotif(req, res){
    notification_v2.count()
    .then(count => {
        res.status(200).json({
            data: {
                 status: 'success',
                 data: count,
                 code: 200,
                 message: 'Berhasil mengambil data!',
             }
           });
    })
    .catch(error => {
        console.error('Error counting data:', error);
    });
}


module.exports = { getPhoneBook, getSensorDetail, getSuhuHumadity , getCountNotif }