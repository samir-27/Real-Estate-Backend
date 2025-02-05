const mongoose = require ("mongoose")

require("dotenv").config()

const dbConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("DB connected successfully")})
    .catch((err)=>{
        console.log("error in db connection")
        console.error(err.message);
        process.exit(1)
    })
}

module.exports = dbConnection;