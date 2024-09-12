const express = require('express');
const cors = require('cors'); 
const mysql2 = require('mysql2');

const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());  

const db = mysql2.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'admin',
    port: 3306,
    database: 'user'
});

db.getConnection((err) => {
    if (err) {
        console.error('Failed to connect to MySQL:', err);
    } else {
        console.log('Connected to MySQL as test js');
    }
});

// router.post('/', (req, res) => {
//     try {
//         const { input } = req.body;
//         console.log(`Input value is ${input}`);
//         req.inputValue = input;
//     } catch (error) {
//         console.error('Error in first middleware:', error);
//         res.status(500).send('Server error in processing input');
//     }
// });

router.post('/', (req, res) => {
    try {
        const {input} = req.body;
        db.query('SELECT * FROM clients WHERE id = ?', [input], (err, results) => {
            if (err) {
                console.error('Error querying the database:', err);
                res.status(500).send('Database query failed');
            } else {
                res.status(200).json(results);
                console.log(results)
            }
        });
    } catch (error) {
        console.error('Error in second middleware:', error);
        res.status(500).send('Server error during database query');
    }
});

module.exports = router;
