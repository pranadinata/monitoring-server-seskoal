
const { phone_book: PhoneBook, notification: Notification , suhu_humadity: SuhuHumadity ,set_notif: SetNotif} = require('../../database/models');


function getPhoneBook(req, res){
    PhoneBook.findAll().then((result) => {
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


module.exports = { getPhoneBook }