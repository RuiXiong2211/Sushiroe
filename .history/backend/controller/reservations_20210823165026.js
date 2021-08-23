const express = require("express");
const ReservationModel = require("../models/ReservationModel");
const router = express.Router();
const reservationTemplateCopy = require("../models/ReservationModel");

router.post("/reservation", async (request, response) => {
  const newReservation = new reservationTemplateCopy({
    name: request.body.name,
    email: request.body.email,
    phone: request.body.phone,
    pax: request.body.pax,
    date: request.body.date,
    time: request.body.time,
  });
  console.log(newReservation);
  try {
    const savedNote = await newReservation.save();
    response.json(savedNote);
  } catch (exception) {
    response.json(exception);
  }
});

router.get("/reservation", async (request, response) => {
  try {
    const reservations = await ReservationModel.find();
    response.json(reservations);
  } catch (err) {
    response.json({ message: err });
  }
});

router.get("/reservation/:id", async (request, response) => {
  const reservation = await ReservationModel.findById(request.params.id);
  if (reservation) {
    response.json(reservation.toJSON());
  } else {
    response.status(404).end();
  }
});

router.delete("/reservation/:id", async (request, response) => {
  await ReservationModel.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

router.patch("/reservation/:id", (request, response, next) => {
  console.log(request.body);
  ReservationModel.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  })
    .then((updatedRev) => {
      response.json(updatedRev.toJSON());
    })
    .catch((error) => next(error));
});

module.exports = router;
