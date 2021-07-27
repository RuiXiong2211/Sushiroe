import { React, useEffect, useState, useRef } from "react";
import { useStore, deleteReservation } from "../../services/reservations";
import ResvItem from "./ResvItem";
import { DataGrid } from "@material-ui/data-grid";
import { EditForm } from "./EditForm";
import {
  columns,
  AdminContainer,
  ButtonContainer,
  DeleteButton,
  EditButton,
} from "./AdminDashboard.elements";
import { getReservations } from "../../services/reservations";
import ReservationHeader from "./ReservationHeader";
import ActionResponse from "./ActionResponse";

const AdminDashboard = () => {
  const getAllReservation = useStore((state) => state.getReservations);
  const reservations = useStore((state) => state.reservations);
  const reservationsRef = useRef(useStore.getState().reservations);
  const removeReservation = useStore((state) => state.removeReservation);

  // popup for edit form
  const [showModal, setShowModal] = useState(false);

  const [selectedRows, setSelected] = useState([]);

  // popup for action response
  const [open, setOpen] = useState(false);

  // action response messages
  const [response, setResponse] = useState("");

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

  console.log(reservations);

  const toggleEditForm = () => {
    if (selectedRows.length === 0) {
      setResponse("ERROR: Please select a row to edit.");
      setOpen(!open);
    } else if (selectedRows.length > 1) {
      setResponse(
        "ERROR: You have selected more than 1 row. You can only edit 1 row at a time."
      );
      setOpen(!open);
    } else {
      setShowModal(!showModal);
    }
  };

  const handleDelete = (selectedRows) => {
    if (selectedRows.length > 0) {
      for (let i = 0; i < selectedRows.length; i++) {
        removeReservation(selectedRows[i]);
        deleteReservation(selectedRows[i]);
        setResponse("SUCCESS: Rows successfully deleted");
        setOpen(!open);
      }
    } else {
      setResponse("ERROR: Please select at least one row for deletion.");
      setOpen(!open);
    }
  };

  const handleSelectionChange = (selection) => {
    setSelected(selection);
  };

  return (
    <>
      <ButtonContainer>
        <DeleteButton
          onClick={() => {
            handleDelete(selectedRows);
          }}
        >
          Delete
        </DeleteButton>
        <EditButton onClick={toggleEditForm}>Edit</EditButton>
      </ButtonContainer>
      <ActionResponse open={open} setOpen={setOpen} response={response} />
      <EditForm
        showModal={showModal}
        setShowModal={setShowModal}
        selectedRow={selectedRows}
        reservations={reservations}
      />
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
