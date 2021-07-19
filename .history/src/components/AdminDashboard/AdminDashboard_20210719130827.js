import { React, useEffect } from "react";
import { Container } from "../../globalStyles";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";

const AdminDashboard = () => {

  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);

  useEffect(() => {
    getAllReservation()
  });

  return (
    <>
      <Container>
        {reservations.map((resv) => {
          return (
            <ResvItem
              key={resv.id}
              {...resv}
            />
          );
        })}
      </Container>
    </>
  );
};

export default AdminDashboard;
