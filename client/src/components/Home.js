import React from "react";
import headshot from "../assets/headshot.jpg";

export default function Home() {
  return (
    <div>
      <div className="container mt-4 rounded shadow" id="mainCont">
        <div className="display-4">Hi, I'm Levi Halvorson.</div>
        <img
          src={headshot}
          alt="headshot"
          className="w-25 rounded-circle border border-black float-left m-2"
        />
        <div className="lead p-2">
          Full Stack Web Developer leveraging my background in the oil sector to
          build more intuitive user experiences on the web. Recently earned a
          certificate in Full Stack Development from the University of Toronto
          and developed skills in JavaScript, CSS, MERN stack, and responsive
          web design. Known as an innovative problem-solver passionate about
          developing apps, with a focus on mobile-first design and development.
          Aim for each project is to best engage the audience for an impactful
          user-experience. Excited to leverage my skills in the future as part
          of a fast-paced, quality-driven team in order to build better
          experiences on the web.
        </div>
      </div>

      <div className="text-center">
        <div className="row justify-content">
          <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
            <p>MERN</p>
          </div>
          <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
            <p>HTML5</p>
          </div>
          <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
            <p>CSS3</p>
          </div>
          <div className="bd-highlight col-6 col-sm-6 col-md-6 col-lg-2">
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
}
