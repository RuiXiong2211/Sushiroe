const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/reservations')
const cors = require('cors')

const PORT = process.env.PORT

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../build'))
}

app.use(express.json())
app.use(cors())
app.use('/app', routesUrl)
app.listen(PORT, () => console.log("server is up and running"))