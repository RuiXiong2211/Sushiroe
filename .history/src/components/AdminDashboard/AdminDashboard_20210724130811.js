import { React, useEffect, useState, useRef } from "react";
import { useStore, deleteReservation } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { DataGrid } from "@material-ui/data-grid";
import { EditForm } from './EditForm';
import {
  AdminContainer,
  DeleteButton,
  EditButton,
} from "./AdminDashboard.elements";
import { getReservations } from "../../services/reservations";
import ReservationHeader from "./ReservationHeader";

const AdminDashboard = () => {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const setRev = useStore((state) => state.setRev);
  const reservationsRef = useRef(useStore.getState().reservations);
  const removeReservation = useStore((state) => state.removeReservation);
  
  const [editForm, setEditForm] = useState(false)

  const [selectedRows, setSelected] = useState([]);

  useEffect(() => {
    console.log(reservations);
  }, [reservations]);

  useEffect(() => {
    getAllReservation();
    // return useStore.subscribe(
    //   (reservations) => (reservationsRef.current = reservations),
    //   (state) => state.reservations
    // );
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
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      width: 150,
      editable: true,
    },
    {
      field: "pax",
      type: "number",
      headerName: "Pax",
      width: 100,
      editable: true,
    },
    {
      field: "date",
      type: "date",
      headerName: "Date",
      width: 100,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 100,
      editable: true,
    },
  ];

  const handleDelete = (selectedRows) => {
    console.log(reservations);
    console.log(selectedRows);
    for (let i = 0; i < selectedRows.length; i++) {
      removeReservation(selectedRows[i]);
      deleteReservation(selectedRows[i]);
    }
    console.log(reservations);
  };

  const handleSelectionChange = (selection) => {
    setSelected(selection.selectionModel);
  };

  return (
    <>
      <DeleteButton
        onClick={() => {
          handleDelete(selectedRows);
        }}
      >
        Delete
      </DeleteButton>
      <EditButton onClick={()=> setEditForm(!editForm)}>
        Edit
      </EditButton>
      <EditForm editForm={editForm} />
      <AdminContainer>
        <DataGrid
          rows={reservations}
          columns={columns}
          pageSize={15}
          checkboxSelection={true}
          onSelectionModelChange={handleSelectionChange}
          onEditRowModelChange={(e) => console.log(e.model)}
        />
      </AdminContainer>
    </>
  );

  // version which uses hard code to create a table.
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
