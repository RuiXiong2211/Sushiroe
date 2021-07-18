import React, { useState, useEffect } from "react";
import { Container } from "../../globalStyles";
import { getReservations } from "../../services/reservations";
import ResvItem from "./ResvItem";

const AdminDashboard = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getReservations(setReservations).catch((error) => console.log(error));
  }, [])

  return (
    <>
      <Container>
        <ResvItem />
      </Container>
    </>
  );
};

export default AdminDashboard;
