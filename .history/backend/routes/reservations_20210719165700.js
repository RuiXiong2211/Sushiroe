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

router.get('/reservation/:id', async (request, response) => {
  const reservation = await ReservationModel.findById(request.params.id)
  if (reservation) {
    response.json(reservation.toJSON())
  } else {
    response.status(404).end()
  }
})

router.delete('/reservation/:id', async (request, response) => {
  await ReservationModel.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = router;
