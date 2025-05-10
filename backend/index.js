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
            res.json(results[0]);
        }
    );
});

app.get('/log', (req, res) => {
    db.query(
        'SELECT day, date, time, coordinate1, coordinate2, ROUND(sog1, 2) AS sog1, ROUND(sog2, 2) AS sog2, ROUND(gyrox, 4) AS gyrox, ROUND(gyroy, 4) AS gyroy, ROUND(gyroz, 4) AS gyroz, cog FROM geotag LIMIT 5',
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        })
})

app.get('/coordinate', (req, res) => {
    db.query('SELECT coordinate1, coordinate2 FROM geotag',
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json(result);
        })
})

app.listen(3001, () => console.log('Server running on port 3001'));