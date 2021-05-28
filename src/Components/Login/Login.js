import React from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Redux/Action/UserAction";

import "./Login.css";

function Login({ loginAction }) {
  return (
    <div className="login_page_container">
      <div className="login_modal">
        <label>-- User --</label>
        <input className="login_input" type="text" />
        <label>-- Password --</label>
        <input className="login_input" type="password" />
        <button className="login_btn" onClick={loginAction}>
          Login
        </button>
      </div>
    </div>
  );
}

export default connect(null, { loginAction })(Login);
