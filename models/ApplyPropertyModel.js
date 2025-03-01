const mongoose = require('mongoose')

const ApplyPropertySchema = new mongoose.Schema({
    property: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
        required: true
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyer',
       
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        
    },
    name: {
        type: String,
        required: true,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        maxlength: 255
    },
    phone: {
        type: String,
        required: true,
        maxlength: 20
    },
    message: {
        type: String,
        maxlength: 1000
    }
}, { 
    timestamps: true
})

module.exports = mongoose.model('ApplyProperty', ApplyPropertySchema)
