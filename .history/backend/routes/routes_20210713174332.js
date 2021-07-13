const express = require('express')
const router = express.Router()

router.post('/reservation', (request, response) => {
    response.send('send')
})

module.exports = router