import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Card = React.forwardRef(({ service }, ref) => (
//   <div className="card-container" ref={ref}>
//     <FontAwesomeIcon icon={service.icon} size="5x" className="icon" />
//     <div>
//       <h4>{service.title}</h4>
//       <p>{service.description}</p>
//     </div>
//   </div>
// ));

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
