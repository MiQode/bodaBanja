
const express = require('express');
const server = express();
const mongoose = require("mongoose");
const session = require('express-session');
const User = require('./models/salesExecModel');
const passport = require('passport')
const bodyParser = require('body-parser');
const path = require('path')


const loginRoutes = require('./routes/loginRoutes');
const regSaleExecRoutes = require('./routes/regSalesExecRoutes')
const userRoutes = require("./routes/userRoutes");

server.set("view engine", "pug")
server.use(express.static(path.join(__dirname, 'public')));


server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(passport.initialize());
server.use(passport.session());
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//Initiasing session middleware
server.use(session({
    secret: 'thesecret',
    resave: true,
    saveUninitialized: true
}));

server.use('/', loginRoutes);
server.use('/registerExec', regSaleExecRoutes);
server.use('/user', userRoutes);

// //logout route
server.post('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                //failed to destroy session
            }else {
                return res.redirect('/');
            }
        })
    }
})

//Connection to Database
mongoose.connect("mongodb://localhost:27017/banjaData", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) throw error;
    console.log("Successfully connected")
});


server.listen(3000, function () {
    console.log('listening on 3000')
})

