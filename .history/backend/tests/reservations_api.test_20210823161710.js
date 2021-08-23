const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);

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

//reset database before populating with dummy test values.
beforeEach(async () => {
  await Reservation.deleteMany({});
  let reservationObject = new Reservation(initialReservations[0]);
  await reservationObject.save();
  reservationObject = new Reservation(initialReservations[1]);
  await reservationObject.save();
});

test("all reservations are returned", async () => {
  const response = await api.get("/app/reservation");

  expect(response.body).toHaveLength(initialReservations.length);
});

test("reservations are returned as json", async () => {
  await api
    .get("/app/reservation")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 100000);

test("a valid reservation can be added", async () => {
  const newReservation = {
    name: "Valkyrie",
    email: "valkyrie@gmail.com",
    phone: "90129009",
    pax: "2",
    date: "2021-07-25",
    time: "13:00",
  };

  await api
    .post("/app/reservation")
    .send(newReservation)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const response = await api.get("/app/reservation");

  //check if name exists.
  const contents = response.body.map((r) => r.name);

  expect(response.body).toHaveLength(initialReservations.length + 1);
  expect(contents).toContain("Valkyrie");
});

test("an invalid reservation cannot be added", async () => {
  const newReservation = {
    name: "",
    email: "valkyrie@gmail.com",
    phone: "90129009",
    pax: "2",
    date: "2021-07-25",
    time: "13:00",
  };

  await api.post("/app/reservation").send(newReservation).expect(400);

  const response = await api.get("/app/reservation");

  expect(response.body).toHaveLength(initialReservations.length);
});

afterAll(() => {
  app.close();
  mongoose.connection.close();
});
