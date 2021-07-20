import { React, useEffect, useRef } from "react";
import { unstable_batchedUpdates } from "react-dom";
import { useStore } from "../../services/reservations";
import axios from "axios";
import ResvItem from "./ResvItem";
import { DataGrid } from "@material-ui/data-grid";
import { AdminContainer } from "./AdminDashboard.elements";
import ReservationHeader from "./ReservationHeader";

const AdminDashboard = () => {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const setRev = useStore((state) => state.setRev);
  const reservationsRef = useRef(useStore.getState().reservations);

  const nonReactCallback = () => {
    unstable_batchedUpdates(() => {
      useStore.getState().getReservations();
    });
  };

  useEffect(() => {
    getAllReservation()
    useStore.subscribe(
      (reservations) => (reservationsRef.current = reservations),
      (state) => state.reservations
    );
  }, []);

  console.log(reservations);
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 250,
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "pax",
      headerName: "Pax",
      width: 100,
    },
    {
      field: "date",
      headerName: "Date",
      width: 100,
    },
    {
      field: "time",
      headerName: "Time",
      width: 100,
    },
  ];

  return (
    <>
      <AdminContainer>
        <DataGrid rows={reservations} columns={columns} pageSize={30} />
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
