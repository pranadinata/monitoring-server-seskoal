const { where } = require('sequelize');
const { phone_book , notification: Notification , sensor_detail: SensorDetails ,set_notif: SetNotif} = require('../../database/models');

function createPhoneBook(req, res){

    const { nama, no_hp } = req.body
      phone_book.create({
        nama: nama,
        no_hp: no_hp,
        status: true,
      }).then((result)=>{
        if(result){
            res.status(200).json({
                data: {
                     status: 'success',
                     code: 200,
                     message: 'Berhasil menyimpan data!',
                 }
               });
        }

      });
}

function deletePhoneBook(req, res){
  const { id } = req.body 
  phone_book.destroy({
    where: {
      id: id
    }
  }).then((result)=>{
    if(result){
      res.status(200).json({
        data: {
             status: 'success',
             code: 200,
             message: 'Berhasil menghapus data!',
         }
       });
    }   
  });
}

function updatePhoneBook(req, res){
  const { id, nama, no_hp, status_notif } = req.body 
  phone_book.update({
    nama: nama,
    no_hp: no_hp,
    status: status_notif
  }, {
    where: {
      id: id
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
  // res.json(req.body);
}

module.exports = { createPhoneBook , deletePhoneBook, updatePhoneBook}
