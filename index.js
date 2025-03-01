const express = require("express")
const cors = require("cors")
const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 4000

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow credentials (cookies, auth headers)
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

 const authRoutes = require("./routes/AuthRoutes") 
 const propertyRoutes = require("./routes/PropertyRoutes")
 const buyerRoutes = require("./routes/BuyerRoutes")
 const sellerRoutes = require("./routes/SellerRoutes")   
 const applyPropertyRoutes = require("./routes/ApplyPropertyRoute")
app.use("/api/v1",authRoutes);
app.use("/api/v1",propertyRoutes)
app.use("/api/v1",buyerRoutes)
app.use("/api/v1",sellerRoutes)
app.use("/api/v1",applyPropertyRoutes)
app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

const dbConnect = require("./db")
dbConnect();