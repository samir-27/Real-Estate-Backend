const express = require("express")

const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 4000

app.use(express.json())

// const postRoutes = require("./routes/postRoutes") 

// app.use("/api/v1",postRoutes)

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})

const dbConnect = require("./db")
dbConnect();