const express = require("express");
const app = express();
// const bodyParser = require('body-parser')
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const todos = require('./routes/todo.router')

//middleware
app.use(cors()); 
app.use(express.json());// helps us with accessing req.body

//Express Routes
app.use('/todos', todos)

app.listen(PORT, () =>{
    console.log("live on port 5000")
})