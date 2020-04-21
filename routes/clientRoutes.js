/**Client Route Definitions
/////////////////////////*/
const express = require('express');
const router = express.Router();
const Client = require('../models/clientModel');

//add a new client to db
router.post('/clients', (req, res) => {
    console.log(req.body)
    var client = new Client(req.body);
    client.save();
    Client.create(req.body).then(function(client){
        console.log(req.body)
        res.send(client)
    })
})



// router.get('/clientList', async (req, res) => {
//     if (req.user) {
//         try {
//             let items = await Client.find()
//             if (req.query.gender){
//                 items = await Client.find({ gender: req.query.gender })
//             }
//             res.render('clientList', { users: items })
//         } catch (err) {
//             res.status(400).send('unable to find items in the database')
//         }
//     } else {
//         res.redirect('/'); //redirect to the index login page
//     }
// });

module.exports = router;