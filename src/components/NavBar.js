import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg row">
      <button
        className="navbar-toggler ml-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-3">
          <Link className="navbar-brand" to="/">
            <li className="nav-item active">Levi Halvorson</li>
          </Link>

          <Link className="nav-link" to="/portfolio">
            <li className="nav-item active">Portfolio</li>
          </Link>
          <Link className="nav-link" to="/contact">
            <li className="nav-item active">Contact Me</li>
          </Link>
        </ul>
        <ul className="navbar-nav col justify-content-end ml-3">
          <li className="nav-item active">
            <a
              className="nav-link text-dark"
              href="https://www.linkedin.com/in/levi-halvorson/"
              target="blank"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link text-dark"
              href="https://github.com/Halvosaurus34"
              target="blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link text-dark"
              href="mailto://lhalvorson34@gmail.com"
              target="blank"
            >
              <i className="far fa-envelope"></i>
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link text-dark"
              href="tel:+14038774423"
              target="blank"
            >
              <i className="fas fa-phone"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
