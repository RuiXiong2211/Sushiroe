import React, { useEffect } from "react";
import { Container } from "../../globalStyles";
import { getReservations } from "../../services/reservations";
import ResvItem from "./ResvItem";

const AdminDashboard = () => {

  useEffect(() => {
    getReservations().catch((error) => console.log(error));
  }, [])

  console.log()

  return (
    <>
      <Container>
        <ResvItem />
      </Container>
    </>
  );
};

export default AdminDashboard;
