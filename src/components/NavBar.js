import React from "react";
import ContactButton from "./contact-buttons";
import resume from "../assets/resume.pdf";

import NavButtons from "./Nav-Buttons";
export default function NavBar() {
  const contactButtons = [
    {
      link: "https://www.linkedin.com/in/levi-halvorson/",
      icon: "fab fa-linkedin-in",
    },
    {
      link: "https://github.com/Halvosaurus34",
      icon: "fab fa-github",
    },
    {
      link: "mailto://lhalvorson34@gmail.com",
      icon: "far fa-envelope",
    },
    {
      link: "tel:+14038774423",
      icon: "fas fa-phone",
    },
  ];
  const navButtons = [
    {
      to: "/",
      text: "Levi Halvorson",
    },
    {
      to: "/portfolio",
      text: "Portfolio",
    },
    {
      to: "/contact",
      text: "Contact Me",
    },
  ];
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
        <span className="fas fa-hamburger"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-3">
          {navButtons.map((cell) => {
            return <NavButtons to={cell.to} text={cell.text} />;
          })}
        </ul>
        <ul className="navbar-nav col justify-content-end ml-3">
          <a className="btn btn-dark mb-2 mr-3" target="blank" href={resume}>
            My Resume
          </a>
          <div className="icons d-flex flex-row justify-content-around">
            {contactButtons.map((cell) => {
              return (
                <ContactButton
                  link={cell.link}
                  icon={cell.icon}
                  text={cell.text}
                />
              );
            })}
          </div>
        </ul>
      </div>
    </nav>
  );
}
