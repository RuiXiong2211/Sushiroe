import React from "react";
import {
  ResvRow,
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
      <ResvRow>
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
      </ResvRow>
    </>
  );
};

export default ReservationHeader;
