const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;
const todos = require('./routes/todo.router')

//middleware
app.use(bodyParser.json()); // helps us with accessing req.body
app.use(express.static('build'));

//Express Routes
app.use('/todos', todos)

app.listen(PORT, () =>{
    console.log("live on port 5000")
})