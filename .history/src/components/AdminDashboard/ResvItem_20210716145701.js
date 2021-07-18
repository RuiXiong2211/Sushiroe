import React from "react";
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
} from "./ResItem.elements";

const ResvItem = () => {
  return (
    <>
      <ResvContainer>
        <ResvRow>
          <Resv>
            <ResvData>
              <ResvId></ResvId>
              <ResvName>RuiXiong</ResvName>
              <ResvEmail>RuiXiong@Email.com</ResvEmail>
              <ResvPhone>90122513</ResvPhone>
              <ResvPax>1</ResvPax>
              <ResvDate>11-01-2015</ResvDate>
              <ResvTime>11:00</ResvTime>
            </ResvData>
          </Resv>
        </ResvRow>
      </ResvContainer>
    </>
  );
};

export default ResvItem;
