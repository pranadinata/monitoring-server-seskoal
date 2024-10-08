const { where } = require('sequelize');
const { set_notif } = require('../../database/models');

async function showNotif(req, res){
    const notif = await set_notif.findAll();
    res.status(200).json({
        data: {
            status: 'success',
            code: 200,
            data: notif
        }
    });
}

async function updateSetNotif(req, res){
    
    const notif_lama = await set_notif.findOne({
        where: {
            id: 1
        }
    });
   
    set_notif.update({
      notif: notif_lama.notif == true ? false : true
    }, {
      where: {
        id: 1
      }
    }).then((result)=>{
      if(result){
        res.status(200).json({
          data: {
               status: 'success',
               code: 200,
               message: 'Berhasil mengubah data!',
           }
         });
      }   
    });
  }

module.exports = { 
    showNotif,
    updateSetNotif

  }
