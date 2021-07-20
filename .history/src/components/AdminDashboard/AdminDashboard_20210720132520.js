import { React, useEffect, useRef } from "react";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { AdminContainer } from './AdminDashboard.elements'
import ReservationHeader from "./ReservationHeader";

const AdminDashboard = () => {

  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const reservationsRef = useRef(useStore.getState().reservations)

  useEffect(() => {
    useStore.subscribe(
      getAllReservation(),
      reservations => (reservationsRef.current = reservations),
      state => state.reservations)
  });

  return (
    <>
      <AdminContainer>
        <ReservationHeader/>
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
              time={resv.time}
            />
          );
        })}
      </AdminContainer>
    </>
  );
};

export default AdminDashboard;
