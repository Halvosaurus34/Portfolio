import weather from "../assets/weatherIcon.PNG";
import memori from "../assets/memories.png";
import stock from "../assets/stockIcon.png";
import fitness from "../assets/fitness.png";
import wetBat from "../assets/wetBatIcon2.PNG";
import editor from "../assets/editor.png";

export const projects = [
  {
    img: memori,
    title: "Memori",
    description:
      "Memori is a social networking site for sharing photos of your memories! Upload your own interesting events and like other posts. You will even be recommended other posts!",
    websiteLink: "https://levimemori.netlify.app/",
    gitHubLink: "https://github.com/Halvosaurus34/memori",
    tech: "React, Redux, MongoDB, Mongoose, Express, NodeJS",
  },
  {
    img: wetBat,
    title: "Wet-Bat Challenge",
    description:
      "A coding challenge to make a travel website where you can create travel quotes and view a list of quotes.",
    websiteLink: "https://shielded-badlands-63088.herokuapp.com/",
    gitHubLink: "https://github.com/Halvosaurus34/wet-bat-challenge",
    tech: "NodeJS, MySQL, Express, ReactJS",
  },
  {
    img: editor,
    title: "JS-Scribblify",
    description: "An interactive coding environment I published to npm!",
    gitHubLink: "https://github.com/Halvosaurus34/jbook",
    tech: "Typescript, Redux, ReactJS",
  },

  {
    img: weather,
    title: "Weather App",
    description:
      "An application featuring real time weather searching with use of local storage.",
    websiteLink: "https://halvosaurus34.github.io/Weather-App/",
    gitHubLink: "https://github.com/Halvosaurus34/Weather-App",
    tech: "API, JavaScript, CSS, HTML, local storage",
  },

  {
    img: stock,
    title: "WallStreet Simulator",
    description:
      "My first group project! Buy and sell stocks with simulated currency!",
    websiteLink: "https://halvosaurus34.github.io/WallStreet-Simulator/",
    gitHubLink: "https://github.com/Halvosaurus34/Project-1",
    tech: "API, JavaScript, CSS, HTML",
  },
  {
    img: fitness,
    title: "Fitness Tracker",
    description: "A fitness app where I use MongoDB to store info.",
    websiteLink: "https://salty-eyrie-48528.herokuapp.com/",
    gitHubLink: "https://github.com/Halvosaurus34/Fitness-Tracker",
    tech: "Express, MongoDB, HTML, CSS",
  },
];
