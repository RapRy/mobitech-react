import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./_header.css";
import brandLogoSM from "../../assets/logo-small.png";
import brandLogoLG from "../../assets/logo-large.png";

const Main = () => {
  return (
    <div className="header-container">
      <div className="flex-container inner-container">
        <div className="brand-container">
          <img src={brandLogoSM} alt="Mobitech Solutions" />
        </div>
        <div className="nav-container">
          <FontAwesomeIcon icon={faBars} size="2x" className="burger-menu" />
        </div>
      </div>
    </div>
  );
};

export default Main;
