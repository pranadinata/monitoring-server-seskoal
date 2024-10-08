// Memuat modul dotenv untuk membaca variabel lingkungan
require('dotenv').config();

const Sequelize = require('sequelize');

// Membuat koneksi menggunakan variabel lingkungan dari .env
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nama database
  process.env.DB_USER, // Username database
  process.env.DB_PASSWORD, // Password database
  {
    host: process.env.DB_HOST, // Host database
    port: process.env.DB_PORT, // Port database
    dialect: process.env.DB_DIALECT, // Dialek database
    logging: false, // Menonaktifkan logging SQL di konsol (opsional)
  }
);

module.exports = sequelize;
