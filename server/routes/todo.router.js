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

router.post('/', (req, res) =>{
    const {description} = req.body;
    const sqlText = `INSERT INTO todo ("description") VALUES ($1)`
    pool.query(sqlText, [description])
        .then((result) =>{
            res.sendStatus(201)
        })
        .catch((error)=>{
            console.log(`error making database query ${sqlText}`, error)
        })
})

module.exports = router;