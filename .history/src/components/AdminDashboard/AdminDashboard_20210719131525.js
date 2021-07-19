import { React, useEffect } from "react";
import { Container } from "../../globalStyles";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";

const AdminDashboard = () => {

  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  console.log(reservations)

  useEffect(() => {
    getAllReservation()
  }, [getAllReservation]);

  return (
    <>
      <Container>
        {reservations.map((resv) => {
          return (
            <ResvItem
              key={resv._id}
              id={resv._id}
              name={resv.name}
              email={resv.email}
              phone={resv.phone}
              pax={resv.pax}
              date={resv.date}
              time={resv.date}
            />
          );
        })}
      </Container>
    </>
  );
};

export default AdminDashboard;
