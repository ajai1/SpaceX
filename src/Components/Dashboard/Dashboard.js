import React from 'react'

import Ship from "./Ship/Ship"
import Rocket from "./Rockets/Rocket"


const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
           <Rocket/>
            <Ship/> 
        </div>
    )
}

export default Dashboard