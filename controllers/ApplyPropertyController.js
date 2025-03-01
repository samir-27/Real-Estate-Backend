const ApplyProperty = require('../models/ApplyPropertyModel')

const applyProperty = async (req, res) => {
    try {
        const { property, buyer, seller, name, email, phone, message } = req.body
        console.log(req.body);

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
        res.status(201).json({ message: 'Application submitted successfully!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { applyProperty }
