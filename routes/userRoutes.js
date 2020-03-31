/**Route Definitions
//////////////////*/
const express = require('express');
const router = express.Router();
const User = require("../models/salesExecModel")

router.get('/salesExecDashboard', async (req, res) => {
    if (req.session.user) {
        try {
            const userItem = await User.findById(req.session.user._id)
            res.render('salesExecDashboard', { user: userItem });
        } catch (err) {
            res.status(500).send("unable to find item in the database")
        }
    }else {
        res.redirect('/')
    }
});

router.get('/adminDashboard', async (req, res) => {
    if (req.session.user) {
        res.render('adminDashboard', { name: req.session.user.firstName });
    }else {
        res.redirect('/')
    }
})

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
        res.redirect('/'); //redirect to the index login page
    }
});

module.exports = router;