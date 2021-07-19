import React from "react";
import { RiCloseCircleLine } from 'react-icons/ri'
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
              <DeleteButton/>
            </ResvData>
          </Resv>
        </ResvRow>
      </ResvContainer>
    </>
  );
};

export default ResvItem;
