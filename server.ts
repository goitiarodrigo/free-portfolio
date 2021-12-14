const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
require("./src/configs/database")
// const router = require("./routes")

app.use(cors())
app.use(express.json())

// app.use("/api", router)

app.listen(4000, ()=>console.log("Connected"))