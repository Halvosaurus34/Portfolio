import React from "react";
import weather from "../assets/weatherIcon.PNG";
import dayPlanner from "../assets/dayPlannerIcon.png";
import stock from "../assets/stockIcon.png";
import fitness from "../assets/fitness.png";
import wetBat from "../assets/wetBatIcon2.PNG";
import editor from "../assets/editor.png";
export default function Portfolio() {
  return (
    <div
      className="container contactCont rounded shadow p-2 mt-3 mb-3 justify-content-center"
      id="portCont"
    >
      <div className="display-4 ml-5">My Portfolio</div>
      <div className="row m-3 justify-content-center">
        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img
            src={wetBat}
            className="card-img-top"
            alt="..."
            style={{ height: "20rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">Wet-Bat Challenge</h5>
            <p className="card-text">
              A coding challenge to make a travel website where you can create
              travel quotes and view a list of quotes.
            </p>
            <br />
            <a
              href="https://shielded-badlands-63088.herokuapp.com/"
              className="btn btn-dark mr-1"
            >
              Website
            </a>
            <a
              href="https://github.com/Halvosaurus34/wet-bat-challenge"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img src={editor} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">JS-Scribblify</h5>
            <p className="card-text">
              An interactive coding environment I published to npm!
            </p>
            <br />
            <a
              href="https://github.com/Halvosaurus34/jbook"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img src={weather} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text mb-5">
              An application featuring real time weather searching with use of
              local storage.
            </p>
            <a
              href="https://halvosaurus34.github.io/Weather-App/"
              className="btn btn-dark mr-1"
            >
              Website
            </a>
            <a
              href="https://github.com/Halvosaurus34/Weather-App"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img src={dayPlanner} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Day Planner</h5>
            <p className="card-text">
              Plan out your day from 9Am to 5PM. Colour scheme will change
              depending on what time it is!
            </p>
            <a
              href="https://halvosaurus34.github.io/Day-Planner/index.html"
              className="btn btn-dark mr-1"
            >
              Website
            </a>
            <a
              href="https://github.com/Halvosaurus34/Day-Planner"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img src={stock} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">WallStreet Simulator</h5>
            <p className="card-text">
              My first group project! Buy and sell stocks with simulated
              currency!
            </p>
            <br />
            <a
              href="https://halvosaurus34.github.io/WallStreet-Simulator/"
              className="btn btn-dark mr-1"
            >
              Website
            </a>
            <a
              href="https://github.com/Halvosaurus34/Project-1"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
          <img src={fitness} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Fitness Tracker</h5>
            <p className="card-text">
              A fitness app where I use MongoDB to store info.
            </p>
            <br />
            <a
              href="https://salty-eyrie-48528.herokuapp.com/"
              className="btn btn-dark mr-1"
            >
              Website
            </a>
            <a
              href="https://github.com/Halvosaurus34/Fitness-Tracker"
              className="btn btn-dark"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
