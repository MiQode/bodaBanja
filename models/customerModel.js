const mongoose = require("mongoose");

var customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    birthday: {
        type: Date,
        required: [true, 'Date of birth must be provided']
    },
    gender: {
        type: String,
        required: [true, 'Gender must be provided']
    },
    registerDate: {
        type: Date,
        required: true,
        default: new Date()
    },    
})

var Customer = mongoose.model('customer', customerSchema)

module.exports = Customer;

