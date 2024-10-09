const express = require('express');
const sequelize = require('./sequelize');
const app = express();
const port = 3200;

const db = require('./models');
const cron = require('node-cron');
const { table } = require('console');

// Menjalankan cron job setiap menit
cron.schedule('0 1 * * 0', async () => {
//   console.log('Cron job dijalankan setiap menit:', new Date());
  try {
    // Menggunakan truncate untuk mengosongkan tabel User
    await db.SensorCheck.truncate();
    await db.CronJobs.create({ execute: 'Truncate', table: 'sensor_checks' });
    console.log('Cron job berhasil dijalankan setiap hari Minggu jam 1 pagi:', new Date());
    
  } catch (error) {
    console.error('Error saat truncate:', error);
    res.status(500).json({ message: 'Terjadi kesalahan saat truncate tabel' });
  }
});

// app.delete('/truncate', async (req, res) => {
//     try {
//       // Menggunakan truncate untuk mengosongkan tabel User
//       await db.SensorCheck.truncate();
//       res.status(200).json({ message: 'Tabel Sensor berhasil di-truncate' });
//     } catch (error) {
//       console.error('Error saat truncate:', error);
//       res.status(500).json({ message: 'Terjadi kesalahan saat truncate tabel' });
//     }
// });


// app.get('/save-cron-jobs', async (req, res) => {
//     try {
//       // Menggunakan truncate untuk mengosongkan tabel User
//       await db.CronJobs.create({
//         execute: 'Truncate',
//         table: 'sensor_checks'
//       });
//       res.status(200).json({ message: 'Berhasil simpan cron jobs' });

//     } catch (error) {
//       console.error('Error saat truncate:', error);
//       res.status(500).json({ message: 'Terjadi kesalahan saat simpan tabel' });
//     }
// });


sequelize.authenticate()
    .then(() => {
        console.log('Koneksi ke PostgreSQL berhasil!');
    })
    .catch(err => {
        console.error('Koneksi gagal:', err);
    });

app.get('/', (req, res) => {
    res.send('Aplikasi dengan cron job!');
  });

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});