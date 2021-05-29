import React from "react";
//material ui---------------------------------------------------------------------------
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//CSS -----------------------------------------------------------------------------------
import "./Contact.css";

function Contact() {
  return (
    <div className="flex_center contact_container">
      <div className="flex_row_around contact_modal">
        <div>
          <h1>Ajai Kumar</h1>
          <h4>emailtoajai@gmail.com</h4>
          <h4>+91 8870059091</h4>
        </div>
        <div className="flex_row_around" style={{ width: "20em" }}>
          <a href="https://github.com/ajai1" target="_blank">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/iamajai/" target="_blank">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
