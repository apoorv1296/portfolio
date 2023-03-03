import React from "react";
import "./MainContent.css";
import myPDFFile from "../assets/ApoorvCV.pdf";

const MainContent = () => {
  return (
    <>
      <div className="Main_Content">
        <div className="left_side"></div>
        <div className="center-content">
          <div className="photo_block">
            <div className="photo"></div>
            <div className="name_below_photo">APOORV</div>
            <div className="name_below_photo sname">PATEL</div>
            <div className="dash"></div>
            <div className="title_below_photo">WEB DEVELOPER</div>
          </div>

          <div className="details_block">
            <span className="hello">Hello</span>
            <span className="info">Here's who I am & what I do </span>
            <button className="btn" id="resume">
              <a href={myPDFFile} download>
                RESUME
              </a>
            </button>
            <button className="btn" id="project">
              <a href="https://github.com/apoorv1296">PROJECT</a>
            </button>
            <p className="brief">
              "I am a skilled web developer with a focus on creating dynamic,
              responsive, and user-friendly websites. With a strong foundation
              in HTML, CSS, JavaScript and ReactJS, I bring ideas to life by
              building clean, efficient, and visually appealing interfaces
            </p>
          </div>
        </div>

        <div className="right_side"></div>
      </div>
    </>
  );
};

export default MainContent;
