import React from 'react'

import Ship from "./Ship/Ship"
import Rocket from "./Rockets/Rocket"
import Launches from './Launches/Launches'


const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <Launches/>
        </div>
    )
}

export default Dashboard