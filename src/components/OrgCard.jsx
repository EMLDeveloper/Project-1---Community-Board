import React from "react";
import "./OrgCard.css";

const OrgCard = (props) => {
  return (
    <div className="org-card">
      <img src={props.image} alt={`${props.name} logo`} className="org-image" />

      <div className="org-card-content">
        <h2>{props.name}</h2>
        <p className="location">
          <strong>Location: {props.location}</strong>
        </p>
        <p className="focus">
          <strong>Focus: {props.focus}</strong>
        </p>
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="org-card-footer"
      >
        <button className="visit-button">Visit Website</button>
      </a>
    </div>
  );
};

export default OrgCard;
