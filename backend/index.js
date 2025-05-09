import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kki_asv'
});

app.get('/data', (req, res) => {
    db.query(
        'SELECT * FROM geotag LIMIT 1',
        (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results[0]); // hanya kirim 1 objek, bukan array
        }
    );
});

app.get('/log', (req, res) => {
    db.query(
        'SELECT * FROM geotag LIMIT 10',
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        })
})
app.listen(3001, () => console.log('Server running on port 3001'));