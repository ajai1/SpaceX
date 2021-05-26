import React,{useState, useEffect} from 'react'
import Card from "../../Utils/Card/Card"

import {SHIP_API} from "../../../Constants/api_constant"

import "./Ship.css"

function Ship() {

    const [ships, setShips] = useState([]);

    useEffect(()=>{
       async function getData(){
          let res = await fetch("https://api.spacexdata.com/v3/ships");
          let data = await res.json();
          setShips(data);
       }

       getData();
    },[])

    return (
        <div>
            <h1>Ship</h1>
            <div className="ship_info_list">
                {ships.map((ship) => {
                    return <Card apiType={SHIP_API} key={ship.ship_id} info={ship} />
                })}
            </div>
        </div>
    )
}

export default Ship
