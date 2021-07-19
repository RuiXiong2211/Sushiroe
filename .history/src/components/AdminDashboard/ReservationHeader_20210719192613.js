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
  HeaderTime,
  ResvContainer,
} from "./ResItem.elements";

const ReservationHeader = () => {
  return (
    <>
      <ResvContainer>
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
      </ResvContainer>
    </>
  );
};

export default ReservationHeader;
