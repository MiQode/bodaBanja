const express = require('express');
const router = express.Router();

const User = require("../models/banjaModel")

/**Route Definitions
//////////////////*/

//Render the home page to client
router.get('/', (req, res) => {
    res.render('index')
});

//Creating the clients to be added to database
router.post('/addclient', async (req, res) => {
    try {
        var myData = new User(req.body);
        await myData.save()
        console.log(req.body)
        console.log("Item has been saved")
        res.redirect('/clientlist')
    } catch (error) {
        console.log(error.message)
        res.status(400).send("unable to save to database");
    }
});

//Rendering to an Endpoint clientlist to display the served users and items
router.get('/clientlist', async (req, res) => {
    try {
        let items = await User.find()
        res.render('list', { users: items })
    } catch (err) {
        res.status(400).send("unable to find items in the database")
    }
});




module.exports = router;