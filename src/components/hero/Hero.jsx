import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./_hero.css";
import heroBG from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        background: `url(${heroBG}) no-repeat top right`,
        backgroundSize: "cover",
      }}
    >
      <div className="inner-container">
        <h2>WELCOME</h2>
        <p>
          An IT & Platform Solutions, Consultancy & Technical Training Provider
          and General Trading company with more than 11 years of experience.
          Provide VAS/OTT contents with scalable platform for trusted partners,
          corporate clients' and MNOs Trusted Partners with Huawei and Technical
          Educators in SEA region.
        </p>
        <a href="/" className="btn-with-arrow">
          <span>Find out more</span>
          <FontAwesomeIcon icon={faArrowRight} size="lg" className="btn-icon" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
