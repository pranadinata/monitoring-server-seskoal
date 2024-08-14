const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3200;

app.use(express.json());

app.post('/run-script', (req, res) => {
    console.log('Memulai eksekusi skrip');

    const scriptPath = '../build-backend.sh'; // Ganti dengan path skrip Anda

    const child = exec(`bash ${scriptPath}`,{ timeout: 100000 }, (error, stdout, stderr) => { // 10 detik timeout
        if (error) {
            if (error.killed) {
                // res.json();
                console.error('Process was killed due to timeout');
                return res.status(500).json({ error: 'Process was killed due to timeout' });
            }
            console.error(`Error: ${error.message}`);
            return res.status(500).json({ error: error.message });
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).json({ error: stderr });
        }
        console.log(`Stdout: ${stdout}`);
        res.status(200).json({ message: 'Script executed successfully', output: stdout });
    });

    child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
