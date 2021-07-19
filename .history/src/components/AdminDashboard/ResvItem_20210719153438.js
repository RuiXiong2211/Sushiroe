import React from "react";
import { useStore, deleteReservation } from "../../services/reservations";
import {
  ResvContainer,
  ResvRow,
  Resv,
  ResvData,
  ResvDate,
  ResvName,
  ResvPax,
  ResvEmail,
  ResvId,
  ResvPhone,
  ResvTime,
  DeleteButton,
} from "./ResItem.elements";

const ResvItem = ({id, name, email, phone, pax, date, time}) => {

  const removeReservations = useStore((state) => state.removeReservation)

  const handleClickDelete = id => {
    removeReservations(id)
    deleteReservation(id)
  }

  return (
    <>
      <ResvContainer>
        <ResvRow>
          <Resv>
            <ResvData>
              <ResvId>{id}</ResvId>
              <ResvName>{name}</ResvName>
              <ResvEmail>{email}</ResvEmail>
              <ResvPhone>{phone}</ResvPhone>
              <ResvPax>{pax}</ResvPax>
              <ResvDate>{date}</ResvDate>
              <ResvTime>{time}</ResvTime>
              <DeleteButton onClick= {()=> handleClickDelete(id)}/>
            </ResvData>
          </Resv>
        </ResvRow>
      </ResvContainer>
    </>
  );
};

export default ResvItem;
