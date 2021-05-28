import React, {useEffect, useState} from "react";

import LaunchInfo from "./LaunchInfo"
import "./Launches.css";

function Launches() {
  const [launches, setLaunches] = useState([]);
  const [launch, setLaunch] = useState();

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://api.spacexdata.com/v3/launches");
      let data = await res.json();
      setLaunches(data);
      setLaunch(data[2]);
    }
    getData();
  }, []);


  return <div className="launches_container">
   {
      launch && <LaunchInfo launch={launch}/>
    } 
  </div>;
}

export default Launches;
