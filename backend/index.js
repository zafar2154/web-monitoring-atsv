import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import WebSocketServer from 'ws';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kki_asv'
});

app.listen(3001, () => console.log('Server running on port 3001'));

app.get('/data', (req, res) => {
    db.query(
        'SELECT * FROM geotag LIMIT 1',
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results[0]);
        }
    );
});

app.get('/log', (req, res) => {
    db.query(
        'SELECT date, time, latitude, longitude, ROUND(sog1, 2) AS sog1, ROUND(sog2, 2) AS sog2, ROUND(gyro_x, 4) AS gyro_x, ROUND(gyro_y, 4) AS gyro_y, ROUND(gyro_z, 4) AS gyro_z, cog FROM geotag LIMIT 5',
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        })
})

app.get('/coordinate', (req, res) => {
    db.query('SELECT latitude, longitude FROM geotag',
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        })
})

const upload = multer({ dest: 'uploads/' });

// surface image api
app.post('/upload/surface', upload.single('image'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, 'uploads', 'surface.jpg');
    fs.rename(tempPath, targetPath, err => {
        if (err) return res.sendStatus(500);
        res.json({ message: 'Upload berhasil!' });
    });
});

app.get('/image/surface', (req, res) => {
    const imgPath = path.join(__dirname, 'uploads', 'surface.jpg');
    if (fs.existsSync(imgPath)) {
        res.sendFile(imgPath);
    } else {
        res.status(404).json({ error: 'Gambar belum tersedia' });
    }
});

// underwater image api
app.post('/upload/underwater', upload.single('image'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, 'uploads', 'underwater.jpg');

    fs.rename(tempPath, targetPath, err => {
        if (err) return res.sendStatus(500);
        res.json({ message: 'Upload underwater berhasil!' });
    });
});

app.get('/image/underwater', (req, res) => {
    const imgPath = path.join(__dirname, 'uploads', 'underwater.jpg');
    if (fs.existsSync(imgPath)) {
        res.sendFile(imgPath);
    } else {
        res.status(404).json({ error: 'Underwater image not found' });
    }
});