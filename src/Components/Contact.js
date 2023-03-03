import React from "react";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showDetails, setShowDetails] = useState({});

  const [popupStatus, setPopupStatus] = useState(1);

  function validateForm() {
    let invalidInp = {};

    if (!firstName) {
      invalidInp.errorFirstName = "First name is required";
    }

    if (!lastName) {
      invalidInp.errorLastName = "Last name is required";
    }

    if (!email) {
      invalidInp.errorEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      invalidInp.errorEmail = "Email is invalid";
    }

    if (!subject) {
      invalidInp.errorSubject = "Subject is required";
    }

    if (!message) {
      invalidInp.errorMessage = "Message is required";
    }

    setErrors(invalidInp);

    return Object.keys(invalidInp).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validateForm()) {
      setShowDetails({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setPopupStatus(1);
    }
  }

  return (
    <div className="main-contact-page">
      <div className="contact-details">
        <div className="left-side-contact">
          <h1>Contact Us</h1>
          <h3>Looking forward to hear from you</h3>

          <h2>Phone Number : </h2>
          <h3>+917509591293</h3>

          <h2>Email : </h2>
          <h3>apoorv1296@gmail.com</h3>
        </div>
        <div className="right-side-form">
          <form onSubmit={handleSubmit}>
            <div className="input-full-name">
              <div className="input-first-name">
                <label>First Name:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.errorFirstName && (
                  <span className="error-msg">{errors.errorFirstName}</span>
                )}
              </div>
              <div className="input-last-name">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.errorLastName && (
                  <span className="error-msg">{errors.errorLastName}</span>
                )}
              </div>
            </div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.errorEmail && (
              <span className="error-msg">{errors.errorEmail}</span>
            )}

            <label>Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.errorSubject && (
              <span className="error-msg">{errors.errorSubject}</span>
            )}

            <div className="msg-input">
              <label>Message:</label>
              <textarea
                value={message}
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.errorMessage && (
                <span className="error-msg">{errors.errorMessage}</span>
              )}
            </div>
            <button type="submit" id="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>

      {popupStatus == 1 && Object.keys(showDetails).length > 0 && (
        <Display_popup
          showDetails={showDetails}
          popupStatus={popupStatus}
          setPopupStatus={setPopupStatus}
        />
      )}
    </div>
  );
}

const Display_popup = ({ showDetails, popupStatus, setPopupStatus }) => {
  let name = `${showDetails.firstName.toUpperCase()} ${showDetails.lastName.toUpperCase()}`;

  function onConfirm() {
    console.log(showDetails);
    setPopupStatus(0);
  }

  return (
    <>
      <div className="blur-display"></div>
      <div className="display-filled-details">
        <h3>NAME : {name}</h3>
        <h3>EMAIL : {showDetails.email}</h3>
        <h3>SUBJECT : {showDetails.subject}</h3>
        <h3>MESSAGE : {showDetails.message}</h3>
        <div className="confirm-details-btn">
          <button id="cnfrm-btn" onClick={onConfirm}>
            CONFIRM
          </button>
          <button id="cncle-btn" onClick={() => setPopupStatus(0)}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export { Contact, Display_popup };
