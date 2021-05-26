import React from "react";
import "./Launches.css";

function Launches() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("https://api.spacexdata.com/v3/launches");
      let data = await res.json();
      setLaunches(data);
    }

    getData();
  }, []);

  return <div></div>;
}

export default Launches;
