import React from "react";

function contactButtons(props) {
  return (
    <div>
      <li className="nav-item active">
        <a className="nav-link text-dark" href={props.link} target="blank">
          <i className={props.icon}></i>
        </a>
      </li>
    </div>
  );
}

export default contactButtons;
