const { where } = require('sequelize');
const { phone_book , suhu_humadity , sensor_detail ,set_notif} = require('../../database/models');

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
}

function updateSensorDetail(req, res){
  const { id, deskripsi } = req.body 
  sensor_detail.update({
    description: deskripsi
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
}

function updateSuhuHumadity(req, res) {
  const { id, value } = req.body 
  suhu_humadity.update({
    value: value
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
    
}

module.exports = { 
    createPhoneBook, 
    deletePhoneBook, 
    updatePhoneBook,
    updateSensorDetail,
    updateSuhuHumadity
  }
