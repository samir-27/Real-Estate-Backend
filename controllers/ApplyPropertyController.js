const { default: mongoose } = require('mongoose')
const ApplyProperty = require('../models/ApplyPropertyModel')
const Property = require("../models/PropertyModel");

const applyProperty = async (req, res) => {
    try {
        const { property, buyer, seller, name, email, phone, message } = req.body
        // console.log(req.body);

        const newApplication = new ApplyProperty({
            property,
            buyer,
            seller,
            name,
            email,
            phone,
            message
        })
        await newApplication.save()
        await Property.findByIdAndUpdate(property, { 
            $addToSet: { applications: buyer }
        });
        res.status(201).json({ message: 'Application submitted successfully!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getApplications = async(req,res)=>{
    try {
        const { propertyID } = req.params;
        console.log(propertyID)
        const applications = await ApplyProperty.find({ property: propertyID });
        // db.applyproperties.find({ property: ObjectId("64f6c8eab3d1a3e6c8e9a0f1") })
        // const applications = await ApplyProperty.find({ property: new mongoose.Types.ObjectId(propertyID) });

        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { applyProperty ,getApplications}
