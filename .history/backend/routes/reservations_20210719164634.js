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
      console.log("reservation succesfully added to mongodb.")
    })
    .catch((error) => {
      response.json(error)
    })
})

router.get('/reservation', async (request, response) => {
  try {
  const reservations = await ReservationModel.find()
  response.json(reservations)
  } catch (err) {
    response.json({message : err})
  }
})

router.delete('/reservation/:id', async (request, response) => {
  try {
    console.log("hello " + JSON.stringify(request.params))
    const reservation = await ReservationModel.findByIdAndRemove(request.param.id)
    response.json(reservation)
    } catch (err) {
      response.json({message : err})
    }
})

module.exports = router;
