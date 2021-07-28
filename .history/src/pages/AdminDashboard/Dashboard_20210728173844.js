import React from 'react'
import { AdminDashboard } from '../../components'

const Dashboard = (reservations) => {
    return (
        <>
            <AdminDashboard reservations={reservations}/>
        </>
    )
}

export default Dashboard
