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
        console.log(req.body)
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

// router.get('/clientList', async (req, res) => {
//     if (req.session.user) {
//         try {
//             let items = await User.find()            
//             res.render('clientList', { users: items })
//         } catch (err) {
//             res.status(400).send('unable to find items in the database')
//         }
//     } else {
//         res.redirect('/');
//     }
// });


//Show list of clients
// router.get('/clientList', async (req, res) => {
//     try {
//         let items = await Client.find()
//         if (req.query.gender){
//             items = await Client.find({ gender: req.query.gender })
//         }
//         res.render('clientList', { users: items })
//     } catch (err) {
//         res.status(400).send('unable to find items in the database')
//     }
    
// });

// //  Code to Update a User
// router.post("/update", async (req, res) => {
//     if (req.session.user) {
//     try {
//         const updateduser = await User.findOneAndUpdate({ _id: req.session.user._id },req.body)
//         const role = permissions[updateduser.role]
//         res.redirect(role.homepage);
//     } catch (error) {
//         res.status(400).send("unable to update to database");
//         }
//     } else{
//      res.redirect('/') 
//     }
//  })

// // Code to Delete a User and keep you on the same page
// router.post("/delete", async (req, res) => {
//     try {
//         await User.deleteOne({ _id: req.body.id })
//         res.redirect('back')
//         // res.redirect('user/salesExecList')
//     } catch (error) {
//         res.status(400).send("unable to delete from database");
//     }
// })

module.exports = router;