import { React, useEffect, useRef } from "react";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { DataGrid } from '@material-ui/data-grid';
import { AdminContainer } from "./AdminDashboard.elements";
import ReservationHeader from "./ReservationHeader";

const AdminDashboard = () => {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const reservationsRef = useRef(useStore.getState().reservations);

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
    },
    {
      field: "phone",
      headerName: "Phone",
    },
    {
      field: "pax",
      headerName: "Pax",
    },
    {
      field: "date",
      headerName: "Date",
    },
    {
      field: "time",
      headerName: "Time",
    },
  ];

  useEffect(() => {
    useStore.subscribe(
      getAllReservation(),
      (reservations) => (reservationsRef.current = reservations),
      (state) => state.reservations
    );
  });

  return (
    <>
      <AdminContainer>
        <DataGrid rows={reservations} columns={columns}/>
      </AdminContainer>
    </>
  );
  // return (
  //   <>
  //     <AdminContainer>
  //       <ReservationHeader/>
  //       {reservations.map((resv) => {
  //         return (
  //           <ResvItem
  //             key={resv.id}
  //             id={resv.id}
  //             name={resv.name}
  //             email={resv.email}
  //             phone={resv.phone}
  //             pax={resv.pax}
  //             date={resv.date}
  //             time={resv.time}
  //           />
  //         );
  //       })}
  //     </AdminContainer>
  //   </>
  // );
};

export default AdminDashboard;
