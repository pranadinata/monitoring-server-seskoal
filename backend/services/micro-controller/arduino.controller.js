
const { phone_book: PhoneBook, notification: Notification , suhu_humadity: SuhuHumadity } = require('../../database/models');


function getTemperature(req, res){
    SuhuHumadity.findAll().then(async (result)=>{
        let currentTemp = parseFloat(req.body.Temperature);
        if(currentTemp >= result[0].value){

            let allPhone = await PhoneBook.findAll();
            allPhone.forEach(async element => {
                if(element.status == true){
                    result = await processSendWhatsApp(element.no_hp, element.nama, currentTemp, result[0].value, result[0].nama);
                }
            });
            res.json('Berhasil mengirim pesan');
        }
    });
}

function getHumadity(req, res) {
    SuhuHumadity.findAll().then(async (result)=>{
        let currentHumadity = parseFloat(req.body.Kelembapan);
        if(currentHumadity >= result[1].value){

            let allPhone = await PhoneBook.findAll();
            allPhone.forEach(async element => {
                if(element.status == true){
                    result = await processSendWhatsApp(element.no_hp, element.nama, currentHumadity, result[1].value,  result[1].nama);
                }
            });
            res.json('Berhasil mengirim pesan');
        }
    });
    
}



function processSendWhatsApp(phone, nama, curTemp, datTemp, nama_sensor) {
    let message = nama_sensor +" Saat Ini " + curTemp + " dan batas maksimal nya adalah " + datTemp

    return new Promise((resolve, reject) => {
        client.sendMessage(`${phone}@c.us`, message).then((response) => {
            // console.log(response);
            if (response.id.fromMe) {
                Notification.create({
                    whatsapp_chat_id: response._data.id.id,
                    temperature: 10,
                    humadity: 10,
                    fromMe: true,
                    content: response._data.body,
                    type: response._data.type,
                    notify_name: nama,
                    from: response._data.from.user,
                    to: response._data.to.user,
                    whatsapp_chat_id_serialized: response._data.id._serialized
                }).then(()=>{
                    console.log({message: 'success send to ' + nama + " dengan nomer "+ phone})
                });
            }
        });
    });
  }


module.exports = { getTemperature, getHumadity }