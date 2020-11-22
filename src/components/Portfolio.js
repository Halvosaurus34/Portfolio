import React from 'react'
import quiz from '../assets/quizIcon.png'
import weather from '../assets/weatherIcon.PNG'
import dayPlanner from '../assets/dayPlannerIcon.png'
import stock from '../assets/stockIcon.png'


export default function Portfolio(){
    return(
        <div
        className="container contactCont rounded shadow p-2 mt-3 mb-3 justify-content-center"
        id="portCont"
      >
        <div className="display-4 ml-5">My Portfolio</div>
        <div className="row m-3 justify-content-center">
          <div
            className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2"
          >
            <img
              src={weather}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text mb-5">
                An application featuring real time weather searching with use of
                local storage.
              </p>
              <a
                href="https://halvosaurus34.github.io/Weather-App/"
                className="btn btn-dark mr-1"
                >Website</a
              >
              <a
                href="https://github.com/Halvosaurus34/Weather-App"
                className="btn btn-dark"
                >GitHub</a
              >
            </div>
          </div>
          <div
            className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2"
          >
            <img
              src={quiz}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">
                A timed quiz about JavaScript! Test your skills and try to get the
                highscore!
              </p>
              <br />
              <a
                href="https://halvosaurus34.github.io/Code-Quiz/index.html"
                className="btn btn-dark mr-1"
                >Website</a
              >
              <a
                href="https://github.com/Halvosaurus34/Code-Quiz"
                className="btn btn-dark"
                >GitHub</a
              >
            </div>
          </div>
          <div
            className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2"
          >
            <img
              src={dayPlanner}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Day Planner</h5>
              <p className="card-text">
                Plan out your day from 9Am to 5PM. Colour scheme will change
                depending on what time it is!
              </p>
              <a
                href="https://halvosaurus34.github.io/Day-Planner/index.html"
                className="btn btn-dark mr-1"
                >Website</a
              >
              <a
                href="https://github.com/Halvosaurus34/Day-Planner"
                className="btn btn-dark"
                >GitHub</a
              >
            </div>
          </div>
          <div
            className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2"
          >
            <img
              src={stock}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">WallStreet Simulator</h5>
              <p className="card-text">
                My first group project! Buy and sell stocks with simulated
                currency!
              </p>
              <br />
              <a href="https://halvosaurus34.github.io/WallStreet-Simulator/" className="btn btn-dark mr-1">Website</a>
              <a
                href="https://github.com/Halvosaurus34/Project-1"
                className="btn btn-dark"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      </div>
      )
}