import React from "react";
import "./Project.css";

function Project(props) {
  var projectInfo = props.projectDetails;
  return (
    <div className="project-1">
      <div className="project-details">
        <div className="project-name">{projectInfo.ProjectName}</div>
        <div className="project-info">
          <span className="project-info-headling"> Features : </span>
          {projectInfo.Features}
        </div>
        <div className="project-info">
          <span className="project-info-headling">Tech Stack :</span>
          <ul className="tech-list">
            {projectInfo.TechStack.map((tech, i) => (
              <li key={i + tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="project-info">
          <span className="project-info-headling">Role :</span>
          {projectInfo.Role}
        </div>
        <div className="project-info">
          <span className="project-info-headling">Github Link : </span>
          {projectInfo.GithubLink}
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + projectInfo.Image}
        alt="Project Image"
        className="project-img"
      />
    </div>
  );
}

export default Project;
