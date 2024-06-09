require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { users: Users } = require('../../database/models');


function postLogin(req, res) {
    const { username, password } = req.body;
    // res.json(req.body);
    if (!username || !password) {
        return res.status(400).json({
            status: 'Fail',
            message: 'Error Validas Inputan',
            error: 'Mohon Masukan Email dan Password',
        });
    }
    

    Users.findOne({
        where: { username: username },
        attributes: ['id','password']
    }).then((user) => {
        if (!user) {
            res.status(400).json({
                data: {
                    status: 'error',
                    code: 400,
                    message: 'Username Tidak Ditemukan!!!',
                }
            });
        }
        bcrypt.compare(password, user.get('password'), (err, isMatch) => {
            if (err) {
                res.status(400).send('Password Error');
            };

            if (isMatch) {
                const token = jwt.sign({ userId: user.get('id') }, process.env.APP_SECRETKEY, { expiresIn: '1h' });
                res.status(200).json({
                    data: {
                         status: 'success',
                         token: token,
                         code: 200,
                         message: 'Success login!',
                     }
                   });
            } else {
                res.status(400).json({
                    data: {
                        status: 'error',
                        code: 400,
                        message: 'Salah Password!!!',
                    }
                });
            }

        });


    });




}


module.exports = { postLogin }