const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

//Sales Executive schema
var salesExecSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    //dob: { type: Date , required: [true, 'Date of birth must be provided']},
    birthday: {
        type: Date,
        required: [true, 'Date of birth must be provided']
    },
    password: { 
        type: String, 
        required: [true, 'Password cannot be left blank']
    },
    email: {
        type: String,
        required: 'Email address cannot be left blank.',
        // validate: [validateEmail, 'Please fill a valid email address'],
        //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 
        //     'Please fill a valid email address'],
        //     index: {unique: true, dropDups: true}
    },
    password: { 
        type: String, 
        required: [true, 'Password cannot be left blank']
    },
    gender: {
        type: String,
        required: [true, 'Gender must be provided']
    },    
    cars: String,
    registerDate: {
        type: Date,
        required: true,
        default: new Date()
    },    
    role: {
        type: String,
        required: 'Please choose role',
        // default: 'basic',
        // enum: ['basic', 'supervisor', 'admin']
    },
    updated_at: { type: Date, default: Date.now },
});

var ClientSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Please Enter your name'
    },
    lastName: String,
    birthday: Date,
    email: String,
    gender: String,
})

salesExecSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
//New Client Model
var User = mongoose.model("User", salesExecSchema);


module.exports = User