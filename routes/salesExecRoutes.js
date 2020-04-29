const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();
const User = require('../models/salesExecModel');
const permissions = require('../permissions');

router.get('/', (req, res) => {
    res.render('salesExecRegister');
})

//Creating the clients to be added to database
router.post("/", async (req, res)=> {
    try {
        var user = new User(req.body);        
        await User.register(user, req.body.password, (err) => {
            if (err)  { throw err }
            console.log('Item has been saved')
            res.redirect('/salesExec');
        });
    } catch (error) {
        res.status(400).send("unable to save to database");
    }
});
// router.post("/addname", async (req, res)=>
router.post("/registerExec", async (req, res)=> {
    try {
        var myData = new User(req.body);
        await myData.save()
        console.log('Item has been saved')
        res.redirect('/salesExecList');
    } catch (error) {
        res.status(400).send("unable to save to database");
    }
 });

//Show list of sales executives
router.get('/salesExecList', async (req, res) => {
    if (req.session.user) {
        try {
            let items = await User.find()
            if (req.query.gender){
                items = await User.find({ gender: req.query.gender })
            }
            res.render('salesExecList', { users: items })
        } catch (err) {
            res.status(400).send('unable to find items in the database')
        }
    } else {
        res.redirect('/');
    }
});

// Editing sales executive info
router.get('/salesEdit', async (req, res) => {
    if (req.session.user) {
        try {
            // const userItem = await User.findById(req.session.user._id)
            const userItem = await User.findById(req.session.user._id)
            res.render('salesExecEdit', { user: userItem });
        } catch (err) {
            res.status(500).send("unable to find item in the databas")
        }
    }else {
        res.redirect('/')
    }
});

// //  Code to Update a User
router.post("/update", async (req, res) => {
    if (req.session.user) {
    try {
        // const updateduser = await User.findOneAndUpdate({ _id: req.session.user._id },req.body)
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

// // Code to Delete a User and keep you on the same page
router.post("/delete", async (req, res) => {
    try {
        await User.deleteOne({ _id: req.body.id })
        res.redirect('back')
        // res.redirect('user/salesExecList')
    } catch (error) {
        res.status(400).send("unable to delete from database");
    }
})

module.exports = router;