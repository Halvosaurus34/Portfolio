import React from "react";
import { Link } from "react-router-dom";
function contactButtons(props) {
  return (
    <div>
      <Link className="navbar-brand" to={props.to}>
        <li className="nav-item active text-dark">{props.text}</li>
      </Link>
    </div>
  );
}

export default contactButtons;
