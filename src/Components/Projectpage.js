import React from "react";
import Project from "./Project";
import "./Project.css";

function Projectpage() {
  const projectObj = [
    {
      ProjectName: "1. Wheather Forcaste",
      Features:
        "IMDB Clone provides the information about latest movies and allows user to search results based on Internet Movie Database API",
      TechStack: ["ReactJs", "JavaScript", "HTML", "CSS"],
      Role: "Web Developer",
      GithubLink: "https://github.com/apoorv1296/Weather-Forcaste",
      Image: "/wheather_forcaste.jpg",
    },

    {
      ProjectName: "2. IMDB Clone",
      Features:
        "IMDB Clone provides the information about latest movies and allows user to search results based on Internet Movie Database API",
      TechStack: ["JavaScript", "HTML", "CSS"],
      Role: "Web Developer",
      GithubLink: "https://github.com/apoorv1296/IMDB_Movie_App.git",
      Image: "/4373222_imdb_logo_logos_icon.png",
    },

    {
      ProjectName: "3. Facebook UI",
      Features: "Clone user Interface of Facebook",
      TechStack: ["HTML", "CSS"],
      Role: "Web Developer",
      GithubLink: "https://github.com/apoorv1296/facebook_UI",
      Image: "/900px-Facebook_logo.png",
    },
  ];

  return (
    <>
      <div className="project-page">
        {projectObj.map((items, index) => {
          return (
            <Project key={index + items.ProjectName} projectDetails={items} />
          );
        })}
        {/* 
        <Project projectDetails={projectObj[0]} />
        <Project projectDetails={projectObj[1]} />
        <Project projectDetails={projectObj[2]} /> */}
      </div>
    </>
  );
}

export default Projectpage;
