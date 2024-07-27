const router = require('express').Router();
const { MessageMedia, Location } = require("whatsapp-web.js");
const request = require('request')
const vuri = require('valid-url');
const fs = require('fs');
// const GlobalFunction = require("../global/store");

const mediadownloader = (url, path, callback) => {
    request.head(url, (err, res, body) => {
        request(url)
            .pipe(fs.createWriteStream(path))
            .on('close', callback)
    })
}

router.post('/sendmessage/:phone', async (req,res) => {
    let phone = req.params.phone;
    let message = req.body.message;

    if (phone == undefined || message == undefined) {
        res.send({ status:"error", message:"please enter valid phone and message" })
    } else {
        client.sendMessage(`${phone}@c.us`, message).then((response) => {
            if (response.id.fromMe) {
                res.send({ status: 'success', message: `MediaMessage successfully sent to ${phone}` })
                // res.json({ status:'success', data : response })
            }
        });
        // client.sendMessage(phone, message).then((response) => {
        //     // GlobalFunction.StoreMessage(response)
        //     if (response.id.fromMe) {
        //         res.json({ status:'success', data : response })
        //     }
        // });
    }
});



router.get('/getchats', async (req, res) => { 
    client.getChats().then((chats) => {
        res.send({ status: "success", message: chats});
    }).catch(() => {
        res.send({ status: "error",message: "getchatserror" })
    })
});

router.get('/showLastChats', async (req, res) => {
    const getLastChats = client.getChats().then((chats) => {
        if(chats){           
            // res.send({ message: chats[0] });
            return chats[0];
        }
    })
    .catch(() => {
        res.send({ status: "error",message: "getchatserror" })
    })
    getLastChats.then((value)=>{
        res.send(value)
        // res.send(value.isGroup)
        

        // console.log(value)
        // console.log(value.lastMessage._data.from.user)   
        // Chat.create({
        //     from : value.lastMessage._data.from.user,
        //     to : value.lastMessage._data.to.user,
        //     type : value.lastMessage._data.mimetype,
        //     content: value.lastMessage._data.body,
        //     whatsapp_chat_id : value.lastMessage._data.id.id, 
        //     whatsapp_from_name : value.lastMessage._data.notifyName,
        //     whatsapp_send_timestamp : value.timestamp,
        //     openai_embedding_id: 1,
        //     has_answer: false,
        // });
    });
});
module.exports = router;
