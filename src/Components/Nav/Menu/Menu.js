import React from "react";
import { connect } from "react-redux";
import { dashboardPage } from "../../../Redux/Action/Dashboard/DashboardAction";
import { closeMenu } from "../../../Redux/Action/NavAction";

import "./Menu.css";

function Menu({ dashboardPage, closeMenu }) {
  const menuItems = ["Launches", "Info"];

  const onSelectMenu = (item) => {
    dashboardPage(item);
    closeMenu();
  };

  return (
    <div className="menu_container">
      {menuItems.map((item) => {
        return (
          <h4 className="menu_items" onClick={() => onSelectMenu(item)}>
            {item}
          </h4>
        );
      })}
    </div>
  );
}

export default connect(null, { dashboardPage, closeMenu })(Menu);
