const express = require("express")
require("dotenv").config()
const cors = require("cors")
const passport = require("passport")
const router = require("./src/routes/index")
const app = express()
const jwt = require("jsonwebtoken")
const morgan = require("morgan")
const fileupload = require("express-fileupload")

require("./src/configs/database")

app.use(passport.initialize());
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(fileupload())

app.use("/api", router)

app.listen(4000, ()=>console.log("Server is on"))