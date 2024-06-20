
const { phone_book, notification , sensor_detail , suhu_humadity, set_notif} = require('../../database/models');


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


module.exports = { getPhoneBook, getSensorDetail, getSuhuHumadity }