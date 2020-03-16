//Requirements
const express = require('express');
const server = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const userRoutes = require("./routes/userRoutes")

server.set("view engine", "pug")
server.use('/', userRoutes)
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static(__dirname + '/public'));

//Connection to Database
mongoose.connect("mongodb://localhost:27017/banjaData", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) throw error;
    console.log("Successfully connected")
});



server.listen(3000, function () {
    console.log('listening on 3000')
})

