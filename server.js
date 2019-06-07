const express = require ('express');
let bodyParser = require('body-parser');
const Task = require('./api/models/todoListModel');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
//create express app

const app = express();

//mongoose instance connection URL Connnection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

// importing route

const routes = require ('./api/roues/todoListRoutes');
routes(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// not found 

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

// server port and listen


app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
});
