import React from "react";
import { connect } from "react-redux";

import Launches from "./Launches/Launches";
import Info from "./Info/Info";
import { LAUNCHES, INFO, CONTACT } from "../../Redux/Constants";

const Dashboard = ({ page }) => {
  console.log(page);
  return (
    <div style={{ marginTop: "5em" }}>
      {page == INFO && <Info />}
      {page == LAUNCHES && <Launches />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { page: state.DashboardReducer.page };
};
export default connect(mapStateToProps)(Dashboard);
