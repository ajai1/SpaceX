import React from "react";
import { connect } from "react-redux";
import { dashboardPage } from "../../../Redux/Action/Dashboard/DashboardAction";

import "./Menu.css";

function Menu({ dashboardPage }) {
  const menuItems = ["Launches", "Rockets", "Info"];
  return (
    <div className="menu_container">
      {menuItems.map((item) => {
        return (
          <h4 className="menu_items" onClick={() => dashboardPage(item)}>
            {item}
          </h4>
        );
      })}
    </div>
  );
}

export default connect(null, { dashboardPage })(Menu);
