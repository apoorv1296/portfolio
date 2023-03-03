import React from "react";
import "./Resume.css";

function ResumePg() {
  return (
    <div className="resume-page">
      <div className="block1-color-tant"></div>

      <div className="resume-page-block-info">
        <h2>APOORV PATEL</h2>
        <h1>WEB DEVELOPER</h1>
        <div className="block1-dash"></div>

        <div className="career-obj">
          <p>
            I am eager to join a company that offers me a stable and positive
            atmosphere and inspires me to enhance and therefore to innovate the
            work culture for the betterment of all parties concerned.
          </p>
        </div>
      </div>
      <div className="resume-page-block-skills">
        <h2 className="resume-heading">SKILLS</h2>
        <ul className="skill-list">
          <li> ReactJS</li>
          <li> JavaScript</li>
          <li> CSS / Bootstrap</li>
          <li> HTML</li>
          <li> Java</li>
          <li> Data Structure</li>
          <li>M.S. Office</li>
          <li>M.S. Project </li>
        </ul>
      </div>

      <div className="resume-project-block">
        <h2 className="resume-heading">PROJECTS</h2>
        <div className="project-cards">
          <div className="resume-project-info">
            <div className="card-project-img1"></div>
            <h3 className="card-project-name">WEATHER FORCAST</h3>
          </div>
          <div className="resume-project-info">
            <div className="card-project-img2"></div>
            <h3 className="card-project-name">IMDB CLONE</h3>
          </div>
          <div className="resume-project-info">
            <div className="card-project-img3"></div>
            <h3 className="card-project-name">FACEBOOK UI</h3>
          </div>
        </div>
      </div>

      <div className="resume-page-block-skills">
        <h2 className="resume-heading">SOFT SKILLS</h2>
        <ul className="soft-skill-list">
          <li> Communication Skills</li>
          <li> Written Communication</li>
          <li> Decision-making</li>
          <li> Teamwork</li>
          <li> Critical Thinking</li>
          <li>Responsibility</li>
        </ul>
      </div>

      <div className="academics-block">
        <h2 className="resume-heading">ACADEMICS</h2>
        <div className="academics-info-block">
          <div className="academics-info">
            <h5>Year 2019</h5>
            <h3>Bachelor of Engineering in Civil Engineering</h3>
            <h4>Shri Ram Institute of Technology, JBP (RGPV MP)</h4>
            <h5> – 70.6 %</h5>
          </div>
          <div className="academics-info">
            <h5>Year 2015</h5>
            <h3>Diploma in Civil Engineering</h3>
            <h4>Govt. Kalaniketan Polytechnic College, JBP (RGPV MP)</h4>
            <h5> – 72.6 %</h5>
          </div>
        </div>
      </div>

      <div className="experience-block">
        <h2 className="resume-heading">EXPERIENCE</h2>
        <div className="experience-block-inner">
          <div className="intern-info-block">
            <h3 className="exp-sub-heading">Internship :</h3>
            <p>Full-Stack Web Development course in Newton School</p>
          </div>
          <div className="exp-info">
            <h3 className="exp-sub-heading">Work Experience</h3>
            <h5>L&T Construction</h5>
            <h5>Planning Engineer (Aug 2015 – May 2022)</h5>
            <div className="exp-project-info">
              <h3>PROJECT: MCRP - P1</h3>
              <p>
                Mumbai Costal Road Project (South) Package – 1 from
                Priyadarshini Park to Baroda Palace (CV - 3505 Cr)
              </p>
            </div>
            <div className="exp-project-info">
              <h3>PROJECT: LMRC-LKCC07</h3>
              <p>
                Construction of Elevated Viaduct of 9 Km and 8 stations Package
                LKCC07 (CV - 700 Cr)
              </p>
            </div>
            <div className="exp-project-info">
              <h3>PROJECT: DMRC – CC77</h3>
              <p>
                Construction of Elevated Viaduct of 3 Km and 2 stations Package
                CC77 (CV - 250 Cr)
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="personal-info-block">
        <h2 className="resume-heading">OTHER DETAILS</h2>

        <div className="personal-info-block-inner">
          <div className="certification-in">
            <h4>Certification In:</h4>

            <ul className="other-details-list">
              <li>Project Management</li>
              <li>Enterprise Risk Management</li>
              <li> Health, Safety and Environment (HSE)</li>
            </ul>
          </div>

          <div className="area-of-interest">
            <h4>Area of Interest:</h4>
            <ul className="other-details-list">
              <li>Fitness</li>
              <li>Gaming</li>
              <li>Chess</li>
            </ul>
          </div>

          <div className="personal-info-inner">
            <h4>Permanent Address:</h4>
            <p>
              637 – Old Jagdamba Colony, Vijay Nagar, Jabalpur, Madhya Pradesh
              (Pin code – 482002).
            </p>
            <h4>Phone:</h4>
            <span>+917509591293</span>
            <h4>DOB:</h4>
            <span>12th July 1996</span>
            <h4>Email:</h4>
            <span>apoorv1296@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="declaration-para">
        <p>
          I hereby declare that the above information is true to best of my
          knowledge - APOORV PATEL
        </p>
      </div>
    </div>
  );
}

export default ResumePg;
