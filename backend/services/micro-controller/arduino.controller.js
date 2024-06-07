


function getTemperatureAndHumadity(req, res){

    res.json({
        message: 'berhasil ambil suhu',
        data: req.body
    });

}

function sendNotifyToWhatsApp(req, res) {
    let phone = "6285721330911";
    let message = "hai ini dari bot"
    client.sendMessage(`${phone}@c.us`, message).then((response) => {
        if (response.id.fromMe) {
            res.send({ status: 'success', message: `MediaMessage successfully sent to ${phone}` })
            // res.json({ status:'success', data : response })
        }
    });
}


module.exports = { getTemperatureAndHumadity, sendNotifyToWhatsApp }