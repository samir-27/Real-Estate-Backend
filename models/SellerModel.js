const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
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
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    zipcode:{
        type:String
    },
    profileImage:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model("Seller",SellerSchema)