/*//The server set-up////
////////////////////////*/

// External Modules
const express = require('express');
const server = express();
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

//Project User Models
const User = require('./models/salesExecModel');
const Client = require('./models/clientModel');



// Importing the request handlers
const loginRoutes = require('./routes/loginRoutes');
const salesExecRoutes = require('./routes/salesExecRoutes')
const userRoutes = require("./routes/userRoutes");
const clientRegRoutes = require('./routes/clientRegRoutes');
const clientRoutes = require('./routes/clientRoutes');

//Setting up view engine and static file access
server.set("view engine", "pug")
server.use(express.static(path.join(__dirname, 'public')));

// Parsing Input to JSON
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Initialising passport for authentication
server.use(passport.initialize());
server.use(passport.session());
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Initialising session middleware
server.use(session({
    secret: 'thesecret',
    resave: true,
    saveUninitialized: true
}));

// Initialising internal APIs
server.use('/', loginRoutes);
server.use('/salesExec', salesExecRoutes);
server.use('/user', userRoutes);
server.use('/registerClient', clientRegRoutes)
server.use('/clients', clientRoutes)


//Connection to Database
mongoose.connect("mongodb://localhost:27017/banjaData", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) throw error;
    console.log("Successfully connected")
});

server.listen(3000, function () {
    console.log('listening on 3000')
})