const {
    phone_book: PhoneBook,
    notification: Notification,
    suhu_humadity: SuhuHumadity,
    set_notif: SetNotif,
    sensor_check: SensorCheck
} = require('../../database/models');


function getTemperature(req, res) {
  

    SuhuHumadity.findAll({
        order: [
            ['id', 'ASC'], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
        ]
    }).then(async (result) => {


        // let currentTemp = parseFloat(req.body.Temperature);
        // let currentKelembapan = parseFloat(req.body.Kelembapan);
        let currentTemp = {
            'suhu': parseFloat(req.body.Temperature),
            'kelembapan': parseFloat(req.body.Kelembapan)
        };

        let server_name = req.body.Id
        try {
            processSaveData(server_name, currentTemp.suhu, currentTemp.kelembapan);
        }catch (e) {
            //
        }

        if (req.body.Temperature >= result[0].value || req.body.Temperature >= result[1].value) {

            console.log('lebih besar');
            let allPhone = await PhoneBook.findAll();
            allPhone.forEach(async element => {
                if (element.status == true) {
                    result = await processSendWhatsApp(element.no_hp, element.nama, currentTemp, server_name);
                }
            });
        }

        res.json('Berhasil mengirim pesan suhu');
    });
}


// Temperatur saat ini xxx. Segera cek  ruangan server infolahta seskoal.

// -IOT Infolahta Seskoal-

function processSaveData(sensor_id, suhu, kelembapan) {
    SensorCheck.create({
        id_sensor: sensor_id,
        temperature: suhu,
        kelembapan: kelembapan,
    }).then(() => {
        console.log({message: 'success save db'})
    });
}

function processSendWhatsApp(phone, nama, curTemp, namaServer) {


    let message = `Data di alat ${namaServer} saat ini : \n Temperatur : *${curTemp.suhu}* °C \n Kelembapan : *${curTemp.kelembapan}* %H \n\n Segera cek ruangan server infolahta seskoal. \n\n -IOT Infolahta Seskoal-`;

    // return new Promise((resolve, reject) => {
    client.sendMessage(`${phone}@c.us`, message).then((response) => {
        if (response.id.fromMe) {
            // curTemp.forEach(element => {
            //     if(element){
            //         Notification.create({
            //             whatsapp_chat_id: response._data.id.id,
            //             nama_sensor: element.suhu,
            //             value_sensor: value.sensor,
            //             fromMe: true,
            //             content: response._data.body,
            //             type: response._data.type,
            //             notify_name: nama,
            //             from: response._data.from.user,
            //             to: response._data.to.user,
            //             whatsapp_chat_id_serialized: response._data.id._serialized
            //         }).then(()=>{
            //             console.log({message: 'success send to ' + nama + " dengan nomer "+ phone})
            //         });
            //     }
            // });
            console.log('success send');
        }
    });
    // });
}

function sendWhatsapp() {
    let message = `Connected`;
    PhoneBook.findAll({where: {status: true}}).then((element)=>{
        client.sendMessage(`${element.no_hp}@c.us`, message).then((response) => {
            console.log('berhasil');
            // res.json('berhasil');
        });
    });
    
}

module.exports = {getTemperature, sendWhatsapp}
