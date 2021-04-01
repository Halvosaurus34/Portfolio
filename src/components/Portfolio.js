import React from "react";
import weather from "../assets/weatherIcon.PNG";
import dayPlanner from "../assets/dayPlannerIcon.png";
import stock from "../assets/stockIcon.png";
import fitness from "../assets/fitness.png";
import wetBat from "../assets/wetBatIcon2.PNG";
import editor from "../assets/editor.png";
import { ProjectCell } from "./project-cell";

export default function Portfolio() {
  const projects = [
    {
      img: wetBat,
      title: "Wet-Bat Challenge",
      description:
        "A coding challenge to make a travel website where you can create travel quotes and view a list of quotes.",
      websiteLink: "https://shielded-badlands-63088.herokuapp.com/",
      gitHubLink: "https://github.com/Halvosaurus34/wet-bat-challenge",
    },
    {
      img: editor,
      title: "JS-Scribblify",
      description: "An interactive coding environment I published to npm!",
      gitHubLink: "https://github.com/Halvosaurus34/jbook",
    },
    {
      img: weather,
      title: "Weather App",
      description:
        "An application featuring real time weather searching with use of local storage.",
      websiteLink: "https://halvosaurus34.github.io/Weather-App/",
      gitHubLink: "https://github.com/Halvosaurus34/Weather-App",
    },
    {
      img: dayPlanner,
      title: "Day Planner",
      description:
        "Plan out your day from 9Am to 5PM. Colour scheme will change depending on what time it is!",
      websiteLink: "https://halvosaurus34.github.io/Day-Planner/index.html",
      gitHubLink: "https://github.com/Halvosaurus34/Day-Planner",
    },
    {
      img: stock,
      title: "WallStreet Simulator",
      description:
        "My first group project! Buy and sell stocks with simulated currency!",
      websiteLink: "https://halvosaurus34.github.io/WallStreet-Simulator/",
      gitHubLink: "https://github.com/Halvosaurus34/Project-1",
    },
    {
      img: fitness,
      title: "Fitness Tracker",
      description: "A fitness app where I use MongoDB to store info.",
      websiteLink: "https://salty-eyrie-48528.herokuapp.com/",
      gitHubLink: "https://github.com/Halvosaurus34/Fitness-Tracker",
    },
  ];
  return (
    <div
      className="container contactCont rounded shadow p-2 mt-3 mb-3 justify-content-center"
      id="portCont"
    >
      <div className="display-4 ml-5">My Portfolio</div>
      <div className="row m-3 justify-content-center">
        {projects.map((cell) => (
          <ProjectCell
            key={cell.title}
            img={cell.img}
            title={cell.title}
            description={cell.description}
            websiteLink={cell.websiteLink ? cell.websiteLink : null}
            gitHubLink={cell.gitHubLink}
          />
        ))}
      </div>
    </div>
  );
}
