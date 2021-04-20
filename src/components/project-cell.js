import React from "react";

export const ProjectCell = (props) => {
  return (
    <div className="card p-2 col-lg-4 col-md-6 col-sm-12 mb-2">
      <img
        src={props.img}
        className="card-img-top"
        alt="..."
        style={{ height: "20rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <h5>Technolgies Used: </h5>
        <p>{props.tech}</p>
        <br />
        {props.websiteLink ? (
          <a
            href={props.websiteLink}
            target="blank"
            className="btn btn-dark mr-1"
          >
            Website
          </a>
        ) : (
          ""
        )}
        {props.gitHubLink ? (
          <a href={props.gitHubLink} target="blank" className="btn btn-dark">
            GitHub
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
