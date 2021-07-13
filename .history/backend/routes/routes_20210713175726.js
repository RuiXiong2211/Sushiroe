const express = require('express')
const router = express.Router()
const reservationTemplateCopy = require('../models/ReservationModel')

router.post('/reservation', (request, response) => {
    response.send('send')
})

module.exports = router