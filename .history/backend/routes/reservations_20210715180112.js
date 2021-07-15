const express = require("express");
const ReservationModel = require("../models/ReservationModel");
const router = express.Router();
const reservationTemplateCopy = require("../models/ReservationModel");

router.post("/reservation", (request, response) => {
  const newReservation = new reservationTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    phone: request.body.phone,
    pax: request.body.pax,
    date: request.body.date,
    time: request.body.time,
  })
  console.log(newReservation)
  newReservation
    .save()
    .then((data) => {
      response.json(data)
      console.log("hello")
    })
    .catch((error) => {
      response.json(error)
    })
})

router.get('/reservation', (request, response) => {
  try {
  const reservations = await ReservationModel.find()
  response.json(reservations)
  } catch (err) {
    response.json({message : err})
  }
})


module.exports = router;