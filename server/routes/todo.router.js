const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//to retrieve todos
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

//get a specific todo
router.get('/:id', (req, res)=>{
    const {id} = req.params;
    const sqlText = `SELECT * FROM todo WHERE todo_id = $1`;
    pool.query(sqlText, [id])
        .then((result) =>{
            res.send(result.rows)
        })
        .catch((error)=>{
            console.log(`error with get a todo ${sqlText}`, error);
            
        })
})

//to create todo
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
//to edit a todo
router.put('/:id', (req, res) =>{
    const {id} = req.params
    const {description} = req.body
    const sqlText = `UPDATE todo SET description =$1 WHERE todo_id = $2`
    pool.query(sqlText, [description, id])
        .then((result)=>{
            res.sendStatus(201)
        })
        .catch((error)=>{
            console.log(`error with updating ${sqlText}`, error);
            
        })
})
//to delete a todo
router.delete('/:id', (req, res) =>{
    const {id} = req.params;
    const sqlText = `DELETE FROM todo WHERE todo_id = $1`
    pool.query(sqlText, [id])
        .then((result) =>{
            res.sendStatus(200)
        })
        .catch((error)=>{
            console.log(`error with deleting a todo ${sqlText}`, error);
            
        })
})

module.exports = router;