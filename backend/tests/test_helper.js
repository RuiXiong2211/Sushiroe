const Reservation = require("../models/ReservationModel");

const initialReservations = [
  {
    name: "Lim Rui Xiong",
    email: "ruixiong@gmail.com",
    phone: "90122513",
    pax: "1",
    date: "2021-07-20",
    time: "13:00",
  },
  {
    name: "nerfSeer",
    email: "seer@gmail.com",
    phone: "90129069",
    pax: "5",
    date: "2021-07-23",
    time: "15:00",
  },
];

const ReservationsInDb = async () => {
    const reservations = await Reservation.find({})
    return reservations.map(resv => resv.toJSON())
  }

  module.exports = {
    initialReservations,  ReservationsInDb
  }