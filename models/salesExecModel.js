const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

//Sales Executive schema
var salesExecSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
        minlength: [2, 'name must be atleast 3 characters'],
        maxlength: [20]
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
        minlength: [2, 'name must be atleast 3 characters'],
        maxlength: [20, 'name must be atleast 3 characters']
    },
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
        required: [true, 'Email valid emaiil']
    },
    phone: {
        type: String,
        required: "Please enter right phone number",
        minlength: [10, 'Enter correct phone number'], 
        maxlength: [10, 'Enter correct phone number']
    },
    password: { 
        type: String, 
        required: [true, 'Password cannot be left blank'],
        minlength: [6, 'Required length is 6 characters'], 
        maxlength: [12]
    },
    gender: {
        type: String,
        required: [true, 'Gender must be provided']
    },    
    supervisor: {
        type: String,
        required: 'Choose supervisor'
    },
    numWorkingDays: {
        type: Number, 
        required: ""
    },
    registerDate: {
        type: Date,
        required: true,
        default: new Date()
    },    
    sales_id: String,
    role: {
        type: String,
        required: 'Please choose role',
        // default: 'basic',
        // enum: ['basic', 'supervisor', 'admin']-var date = new Date(user.birthday).toISOString().slice(0,10)
    },
    updated_at: { 
        type: Date, 
        required: true,
        default: Date.now
    },
}, {timestamps: true});


salesExecSchema.plugin(passportLocalMongoose, {usernameField: 'email'});

var User = mongoose.model("User", salesExecSchema);


module.exports = User