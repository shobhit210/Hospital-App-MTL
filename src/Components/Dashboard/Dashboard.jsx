import React from 'react'
import './Dashboard.css'
import Empinfo from '../Empinfo/Empinfo'
import Topbar from '../Navbar/Navbar'


function Dashboard() {
    return (
        <div className="dashboard-body">
            <Topbar />
            <Empinfo />
        </div>
    )
}

export default Dashboard
