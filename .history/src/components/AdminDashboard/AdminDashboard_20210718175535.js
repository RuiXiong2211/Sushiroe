import React from "react";
import { Container } from "../../globalStyles";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";

const AdminDashboard = ({ reservations }) => {

  const reservations = useStore(state.reservations)
  
  return (
    <>
      <Container>
        {reservations.map((resv) => {
          return (
            <ResvItem
              key={resv.id}
              id={resv.id}
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
