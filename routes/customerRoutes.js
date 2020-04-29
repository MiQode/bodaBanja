const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const Customer = require('../models/customerModel');

router.get('/register', (req, res) => {
    res.render('customerRegister');
})

router.post('/', async(req,res) => {
    try {
        var newCustomer = new Customer(req.body);
        await newCustomer.save()
        console.log('customer has been saved')
        res.redirect('/customer/customerList');        
    } catch (error) {
        res.status(400).send('unable to save to database');
    }
})

router.get('/customerList', async (req, res) => {
    try {
        let items = await Customer.find()            
        res.render('customerList', { users: items })
    } catch (err) {
        res.status(400).send('unable to find items in the database')
    }
});

// Update customer information
router.post("/update", async (req, res) => {
    if (req.session.user) {
    try {
        const updateduser = await User.findOneAndUpdate({ _id: req.session.user._id },req.body)
        const role = permissions[updateduser.role]
        res.redirect(role.homepage);
    } catch (error) {
        res.status(400).send("unable to update to database");
        }
    } else{
     res.redirect('/') 
    }
 })

// Code to Delete a customer from the list
router.post("/delete", async (req, res) => {
    try {
        await Customer.deleteOne({ _id: req.body.id })
        res.redirect('back')
        // res.redirect('user/salesExecList')
    } catch (error) {
        res.status(400).send("unable to delete from database");
    }
})

module.exports = router;