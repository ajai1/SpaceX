import React from "react";
import { connect } from "react-redux";

import Launches from "./Launches/Launches";
import Info from "./Info/Info";
import { LAUNCHES, INFO } from "../../Redux/Constants";

const Dashboard = ({ page }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      {page == INFO && <Info />}
      {page == LAUNCHES && <Launches />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { page: state.DashboardReducer.page };
};
export default connect(mapStateToProps)(Dashboard);
