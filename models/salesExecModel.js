const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

//Sales Executive schema
var salesExecSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Please Enter your name'
    },
    lastName: String,
    cars: String,
    birthday: Date,
    email: String,
    gender: String,
    role: {
        type: String,
        required: 'Please choose role'
    }
});

salesExecSchema.plugin(passportLocalMongoose, {usernameField: 'email'});
//New Client Model
var User = mongoose.model("User", salesExecSchema);


module.exports = User