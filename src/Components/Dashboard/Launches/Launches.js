import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../../Redux/Action/Dashboard/Launches/LaunchAction";

import LaunchInfo from "./LaunchInfo";

import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Launches.css";
import SignUpToday from "../../Alerts/SignUpToday";

function Launches({ fetchData }) {
  const [launches, setLaunches] = useState([]);
  const [launch, setLaunch] = useState();
  const [limit, setLimit] = useState(0);
  const [isPremium, setPremium] = useState(false);
  const [shopBuyPremium, setShowBuyPremium] = useState(false);

  useEffect(() => {
    async function getData() {
      let res = await fetch(
        `https://api.spacexdata.com/v3/launches?limit=5&offset=${limit}`
      );
      let data = await res.json();
      setLaunches(data);
      //setLaunch(data[2]);
    }
    //getData();
    fetchData("Launches");
  }, [limit]);

  const changeLimit = (type) => {
    if (type == "prev") {
      if (isPremium && limit != 5) {
        setLimit(limit - 5);
      } else {
        setShowBuyPremium(true);
        setTimeout(() => {
          setShowBuyPremium(false);
        }, 3000);
      }
    } else {
      if (isPremium) {
        setLimit(limit + 5);
      } else {
        setShowBuyPremium(true);
        setTimeout(() => {
          setShowBuyPremium(false);
        }, 3000);
      }
    }
  };

  return (
    <div className="launches_container">
      {launches && (
        <div className="launches_list">
          <div className="flex_center">
            <div
              className="each_launch_item arrow_nav"
              style={{ width: "3em" }}
              onClick={() => changeLimit("prev")}
            >
              <ChevronLeftIcon fontSize="large" />
            </div>
          </div>

          {launches &&
            launches.map((launch) => {
              return (
                <div
                  className={
                    launch.launch_success
                      ? "each_launch_item mission_hover"
                      : "each_launch_item mission_hover"
                  }
                  onClick={() => setLaunch(launch)}
                >
                  <h4>{launch.mission_name}</h4>
                </div>
              );
            })}

          <div className="flex_center">
            <div
              className="each_launch_item arrow_nav"
              style={{ width: "3em" }}
              onClick={() => changeLimit("next")}
            >
              <ChevronRightIcon fontSize="large" />
            </div>
          </div>
        </div>
      )}

      {launch ? (
        <LaunchInfo launch={launch} />
      ) : (
        <div className="flex_center_column" style={{ color: "white" }}>
          <h3>Learn more about the Launches</h3>
          <h4>Select any of the Launches above</h4>
        </div>
      )}
      {shopBuyPremium && <SignUpToday />}

      {/*  {
      launches && launches.map((launch)=> <LaunchInfo launch={launch}/>)
    }  */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps, { fetchData })(Launches);
