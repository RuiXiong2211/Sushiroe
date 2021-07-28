import React from 'react'
import Reservation from '../../components/Reservation/Reservation'

const ReservationPage = (reservations) => {
    return (
        <>
            <Reservation reservations={reservations}/>
        </>
    )
}

export default ReservationPage
