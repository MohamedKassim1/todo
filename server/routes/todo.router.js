const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) =>{
    const sqlText = `SELECT * FROM todo`;
    pool.query(sqlText)
        .then((result) =>{
            res.send(result.rows)
        })
        .catch((error) =>{
            console.log(`Error making database query ${sqlText}`, error)
            res.sendStatus(500);
        });
});

module.exports = router;