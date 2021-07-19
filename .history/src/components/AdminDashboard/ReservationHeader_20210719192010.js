import React from "react";
import {
  HeaderRow,
  Resv,
  ResvData,
  HeaderID,
  HeaderName,
  HeaderEmail,
  HeaderPhone,
  HeaderPax,
  HeaderDate,
  HeaderTime
} from "./ResItem.elements";

const ReservationHeader = () => {
  return (
    <>
      <HeaderRow>
        <Resv>
            <ResvData>
              <HeaderID>ID</HeaderID>
              <HeaderName>NAME</HeaderName>
              <HeaderEmail>EMAIL</HeaderEmail>
              <HeaderPhone>PHONE</HeaderPhone>
              <HeaderPax>PAX</HeaderPax>
              <HeaderDate>DATE</HeaderDate>
              <HeaderTime>TIME</HeaderTime>
            </ResvData>
        </Resv>
      </HeaderRow>
    </>
  );
};

export default ReservationHeader;
