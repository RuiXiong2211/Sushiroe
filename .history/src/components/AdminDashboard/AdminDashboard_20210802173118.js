import { React, useEffect, useState, useRef } from "react";
import { useStore, deleteReservation } from "../../services/reservations";
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
import ActionResponse from "./ActionResponse";

const AdminDashboard = (reservations) => {
  //const getAllReservation = useStore((state) => state.getReservations);
  //const reservations = useStore((state) => state.reservations);
  //const reservationsRef = useRef(useStore.getState().reservations);
  const removeReservation = useStore((state) => state.removeReservation);

  // popup for edit form
  const [showModal, setShowModal] = useState(false);

  const [selectedRows, setSelected] = useState([]);

  // popup for action response
  const [open, setOpen] = useState(false);

  // action response messages
  const [response, setResponse] = useState("");

  useEffect(() => {
    console.log(reservations.reservations.reservations);
  }, [reservations]);

  // useEffect(() => {
  //   getAllReservation();
  //   return useStore.subscribe(
  //     (reservations) => (reservationsRef.current = reservations),
  //     (state) => state.reservations
  //   );
  // }, [getAllReservation]);

  useEffect(() => {
    console.log(selectedRows);
  }, [selectedRows]);

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
        console.log(reservations)
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
      {selectedRows.length === 1 ? (
        <EditForm
          showModal={showModal}
          setShowModal={setShowModal}
          selectedRow={selectedRows}
          reservations={reservations.reservations.reservations}
          open={open}
          setOpen={setOpen}
          response={response}
          setResponse={setResponse}
        />
      ) : null}
      <AdminContainer>
        <DataGrid
          rows={reservations.reservations.reservations}
          columns={columns}
          pageSize={15}
          checkboxSelection={true}
          onSelectionModelChange={handleSelectionChange}
          onEditRowModelChange={(e) => console.log(e.model)}
        />
      </AdminContainer>
    </>
  );

};

export default AdminDashboard;
