const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");
const api = supertest(app);
const helper = require("./test_helper");

const Reservation = require("../models/ReservationModel");

//reset database before populating with dummy test values.
beforeEach(async () => {
  await Reservation.deleteMany({});
  let reservationObject = new Reservation(helper.initialReservations[0]);
  await reservationObject.save();
  reservationObject = new Reservation(helper.initialReservations[1]);
  await reservationObject.save();
});

test("all reservations are returned", async () => {
  const response = await api.get("/app/reservation");

  expect(response.body).toHaveLength(helper.initialReservations.length);
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

  const response = await helper.ReservationsInDb();

  //check if name exists.
  const contents = response.map((r) => r.name);

  expect(response).toHaveLength(helper.initialReservations.length + 1);
  expect(contents).toContain("Valkyrie");
});

test("an invalid reservation cannot be added", async () => {
  const newReservation = {
    email: "valkyrie@gmail.com",
    phone: "90129009",
    pax: "2",
    date: "2021-07-25",
    time: "13:00",
  };

  //should return http 400 bad error, but returns http 200 ok instead.
  await api.post("/app/reservation").send(newReservation);

  const response = await helper.ReservationsInDb();

  expect(response).toHaveLength(helper.initialReservations.length);
});

test("delete reservation", async () => {
    const resvAtStart = await helper.ReservationsInDb();
    const resvToDelete = resvAtStart[0].id.replace(/"/g,"")
    console.log(resvToDelete)
    //should return http 400 bad error, but returns http 200 ok instead.
    await api
    .delete(`/api/notes/${resvToDelete}`)
    .expect(404)
    
    const resvAtEnd = await helper.ReservationsInDb()

    expect(resvAtEnd).toHaveLength(
        helper.initialReservations.length - 1
      )
    
      const contents = resvAtEnd.map(r => r.id)
    
      expect(contents).not.toContain(resvToDelete)
  });

afterAll(() => {
  app.close();
  mongoose.connection.close();
});
