import React, { useState, useEffect } from "react";
import "./Rocket.css";

function Rocket() {
  const [rocket, setRocket] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://api.spacexdata.com/v3/rocket");
      let data = await res.json();
      setRocket(data);
    }

    getData();
  }, []);

  return <div></div>;
}

export default Rocket;
