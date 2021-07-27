import React from "react";
import { EditFormContainer, CloseButton } from './EditFormElements'

export const EditForm = ({ editForm, setEditForm }) => {
  return editForm ? (
    <>
      <EditFormContainer>
        <h1>HELLO!</h1>
        <CloseButton onClick={()=> setEditForm(!editForm)}> Close </CloseButton>
      </EditFormContainer>
    </>
  ) : (
    ""
  );
};
