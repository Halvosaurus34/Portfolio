import React from "react";
import { ProjectCell } from "./project-cell";
import { projects } from "../constants/constants";
export default function Portfolio() {
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
            tech={cell.tech}
          />
        ))}
      </div>
    </div>
  );
}
