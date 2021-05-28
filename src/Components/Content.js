import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Nav from "./Nav/Nav";
import { CONTACT } from "../Redux/Constants";

import { connect } from "react-redux";
import Contact from "./Contact/Contact";

const Content = ({ user, page }) => {
  return (
    <div>
      <Nav />
      {!user.isLogin && <Login />}
      {user.isLogin && <Dashboard />}
      {page == CONTACT && <Contact />}
    </div>
  );
};

const mapStateToProp = (state) => {
  return { user: state.UserReducer, page: state.DashboardReducer.page };
};

export default connect(mapStateToProp)(Content);
