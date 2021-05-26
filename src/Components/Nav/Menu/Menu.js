import React from "react";

import "./Menu.css";

function Menu() {
  const menuItems = ["Launches", "Rockets", "Ships"];
  return (
    <div className="menu_container">
      {menuItems.map((item) => {
        return <h4 className="menu_items">{item}</h4>;
      })}
    </div>
  );
}

export default Menu;
