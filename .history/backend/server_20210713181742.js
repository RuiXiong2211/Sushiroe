const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dontenv')

dotenv.config()

mongoose.connect()

app.listen(4000, () => console.log("server is up and running"))