const express = require("express")
const cors = require("cors")
require("dotenv").config()
const router = require("./src/routes/index")
require("./src/configs/database")
require("./src/configs/passport")
const app = express()
const jwt = require("jsonwebtoken")
const morgan = require("morgan")
const fileupload = require("express-fileupload")


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(fileupload())

app.use("/api", router)

app.listen(4000, ()=>console.log("Server is on"))