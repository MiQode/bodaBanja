/**users Route Definitions
/////////////////////////*/
const express = require('express');
const router = express.Router();
const User = require("../models/salesExecModel")
const session = require('express-session');
const permissions = require('../permissions');


// Get All Route
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

router.get('/salesExecDashboard',async (req, res) => {
    if (req.session.user) {
        try {
            const userItem = await User.findById(req.session.user._id)
            res.render('salesExecDashboard', { user: userItem })
        } catch {
            res.status(500).send("unable to find item in the database");
        }
    } else {
        res.redirect ('/')
    }
 })


router.get('/adminDashboard', async (req, res) => {
    if (req.session.user) {
        res.render('adminDashboard', { name: req.session.user.firstName });
    }else {
        res.redirect('/')
    }
})



// //logout route
router.post('/logout', (req, res) => {
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

module.exports = router;