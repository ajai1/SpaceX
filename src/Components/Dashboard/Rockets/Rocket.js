import React, { useState, useEffect } from "react";
import Card from "../../Utils/Card/Card"
import {ROCKET_API} from "../../../Constants/api_constant"
import "./Rocket.css";

function Rocket() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://api.spacexdata.com/v3/rockets");
      let data = await res.json();
      setRockets(data);
    }
    getData();
  }, []);

  return <div>
      <h1>Rocket</h1>
            <div className="rocket_info_list">
                {rockets.map((rocket) => {
                    return <Card apiType={ROCKET_API} key={rocket.id} info={rocket} />
                })}
            </div>
  </div>;
}

export default Rocket;
