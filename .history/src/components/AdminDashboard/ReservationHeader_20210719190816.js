import React from "react";
import {
  ResvRow,
  Resv,
  ResvData,
  ResvHeader,
} from "./ResItem.elements";

const ReservationHeader = () => {
  return (
    <>
      <ResvRow>
        <Resv>
            <ResvData>
              <ResvHeader>ID</ResvHeader>
              <ResvHeader>NAME</ResvHeader>
              <ResvHeader>EMAIL</ResvHeader>
              <ResvHeader>PHONE</ResvHeader>
              <ResvHeader>PAX</ResvHeader>
              <ResvHeader>DATE</ResvHeader>
              <ResvHeader>TIME</ResvHeader>
            </ResvData>
        </Resv>
      </ResvRow>
    </>
  );
};

export default ReservationHeader;
