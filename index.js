const express = require("express")
const cors = require("cors")
const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json())

 const authRoutes = require("./routes/AuthRoutes") 
 const propertyRoutes = require("./routes/PropertyRoutes")
 const buyerRoutes = require("./routes/BuyerRoutes")

app.use("/api/v1",authRoutes);
app.use("/api/v1",propertyRoutes)
app.use("/api/v1",buyerRoutes)

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

const dbConnect = require("./db")
dbConnect();