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
              <ResvId />
              <ResvName />
              <ResvEmail />
              <ResvPhone />
              <ResvPhone />
              <ResvPax />
              <ResvDate />
              <ResvTime />
            </ResvData>
          </Resv>
        </ResvRow>
      </ResvContainer>
    </>
  );
};

export default ResvItem;
