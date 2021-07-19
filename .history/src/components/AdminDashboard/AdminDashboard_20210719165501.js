import { React, useEffect } from "react";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { AdminContainer } from './AdminDashboard.elements'

const AdminDashboard = () => {

  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);

  useEffect(() => {
    console.log(reservations)
    getAllReservation()
  });

  return (
    <>
      <AdminContainer>
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
              time={resv.time}
            />
          );
        })}
      </AdminContainer>
    </>
  );
};

export default AdminDashboard;
