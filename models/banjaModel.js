const mongoose = require("mongoose");

//New Bodaboda client schema
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    nickName: String
});

//New Client Model
var User = mongoose.model("User", UserSchema);




module.exports = User