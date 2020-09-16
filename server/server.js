const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors")
const todos = require('./routes/todo.router')

//middleware
app.use(cors()); 
app.use(bodyParser.json());// helps us with accessing req.body
// app.use(bodyParser.urlencoded({extended: true}))

//Express Routes
app.use('/todos', todos)

//App Set
const PORT = process.env.PORT || 5000;
//Listen
app.listen(PORT, () =>{
    console.log("live on port 5000")
})