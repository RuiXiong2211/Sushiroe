import { React, useEffect, useState, useRef } from "react";
import { useStore } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { DataGrid } from "@material-ui/data-grid";
import { AdminContainer, DeleteButton } from "./AdminDashboard.elements";
import { getReservations } from "../../services/reservations";
import ReservationHeader from "./ReservationHeader";

const AdminDashboard = () => {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const setRev = useStore((state) => state.setRev);
  const reservationsRef = useRef(useStore.getState().reservations);

  const [selectedRows, setSelected] = useState([]);

  useEffect(() => {
    getAllReservation();
    return useStore.subscribe(
      (reservations) => (reservationsRef.current = reservations),
      (state) => state.reservations
    );
  }, [getAllReservation]);

  // useEffect(() => {
  //   getAllReservation();
  //   return useStore.subscribe(
  //     (reservations) => (reservationsRef.current = reservations),
  //     (state) => state.reservations
  //   );
  // }, [getAllReservation]);

  // useEffect(() => {
  //   getAllReservation();
  // }, []);

  // useEffect(() => {
  //   setRevs(getAllReservation)
  // }, [])

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

  const handleSelectionChange = (selection) => {
    console.log(selection.selectionModel);
    setSelected(selection.selectionModel);
    console.log(selectedRows);
  };

  return (
    <>
      <DeleteButton>delete</DeleteButton>
      <AdminContainer>
        <DataGrid
          rows={reservations}
          columns={columns}
          pageSize={15}
          checkboxSelection={true}
          onSelectionModelChange={handleSelectionChange}
        />
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
