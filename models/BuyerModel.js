const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10
    },
    profileImage:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    pinCode:{
        type:String,
        length:6
    },
    city:{
        type:String
    },
    state: {
        type:String
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Buyer",BuyerSchema);