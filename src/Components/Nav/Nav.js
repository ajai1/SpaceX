import React, { useState } from "react";
import { connect } from "react-redux";
import { openMenu } from "../../Redux/Action/NavAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Menu from "./Menu/Menu";

import "./Nav.css";
import { dashboardPage } from "../../Redux/Action/Dashboard/DashboardAction";
import { CONTACT } from "../../Redux/Constants";

const Nav = ({ menu, openMenu, dashboardPage }) => {
  const [isExploreTab, setExploreTab] = useState(false);

  return (
    <div className="nav_container">
      <div>
        <h2>Space-X</h2>
      </div>
      <div className="nav_tabs">
        <div className="nav_tabs_explore">
          <h3 onClick={openMenu}>
            Explore <small>&#9660;</small>
          </h3>
          {menu && <Menu />}
        </div>

        <h3 onClick={() => dashboardPage(CONTACT)}>Contact</h3>
        <AccountCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return { menu: state.NavReducer.menu };
};

export default connect(mapStateToProp, { openMenu, dashboardPage })(Nav);
