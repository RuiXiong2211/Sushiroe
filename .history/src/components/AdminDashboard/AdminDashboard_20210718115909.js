import React from "react";
import { Container } from "../../globalStyles";
import { reservations } from "../Reservation/Reservation"
import ResvItem from "./ResvItem";

const AdminDashboard = ({reservations}) => {


  console.log()

  return (
    <>
      <Container>
{/*         
        {reservations.map(resv => {
            return (
                <ResvItem
                key={resv.id}
                id={resv.id}
                name={resv.name}
                email={resv.email}
                phone={resv.phone}
                pax={resv.pax}
                date={resv.date}
                time={resv.date}
                />
            )
        })} */}
        
      </Container>
    </>
  );
};

export default AdminDashboard;
