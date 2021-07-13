const express = require("express");
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
  });
  newReservation
    .save()
    .then((data) => {
      console.log("data")
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    })
})

module.exports = router;
