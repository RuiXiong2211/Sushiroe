const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);

const Reservation = require("../models/ReservationModel");
const initialResevations = [
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
beforeEach(async () => {
  await Reservation.deleteMany({});
  let reservationObject = new Reservation(initialResevations[0]);
  await reservationObject.save();
  reservationObject = new Reservation(initialResevations[1]);
  await reservationObject.save();
});

test("all reservations are returned", async () => {
  const response = await api.get("/app/reservation");

  expect(response.body).toHaveLength(initialResevations.length);
});

test("reservations are returned as json", async () => {
  await api
    .get("/app/reservation")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 100000);

afterAll(() => {
  app.close();
  mongoose.connection.close();
});
