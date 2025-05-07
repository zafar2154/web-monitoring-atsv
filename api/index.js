const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_database'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/api/users', (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) return res.status(500).send(err);
        res.json(result);
    });
});

app.listen(5000, () => {
    console.log('Backend running at http://localhost:5173');
});