const express = require('express');
const server = express();

server.listen(3000, function(){
    console.log('listening on 3000')
})

server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
})