const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../server");

const api = supertest(app);

test("reservations are returned as json", async () => {
  await api
    .get("/app/")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 100000);

afterAll(() => {
  mongoose.connection.close();
});
