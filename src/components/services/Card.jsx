import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ service }) => {
  return (
    <div className="card-container">
      <FontAwesomeIcon icon={service.icon} size="5x" className="icon" />
      <div>
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default Card;
