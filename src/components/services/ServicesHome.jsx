import React from "react";
import {
  faMobileAlt,
  faUserTie,
  faSms,
  faChess,
  faGasPump,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

import { MainHeading } from "../_globals";
import Card from "./Card";
import "./_servicesHome.css";

const services = [
  {
    icon: faMobileAlt,
    title: "Mobile Service Provider",
    description:
      "We manage to increase our revenue by expanding our business to Thailand, Vietnam, Philippines, Malaysia, Serbia, Kenya, Czech, and Netherland, as well as through partnerships.",
  },
  {
    icon: faUserTie,
    title: "Consultancy",
    description:
      "Collaborate with Huawei and provide modules for training Provide service and supply extensive product range for major industries in Brunei. Also for O&G and Petrochemical Co.",
  },
  {
    icon: faSms,
    title: "SMS Platforms",
    description:
      "Mobitech Solutions is also able to aid in infotainment suites, SMS platforms and messaging services. We have value added services specifically for Java and Smart phones.",
  },
  {
    icon: faChess,
    title: "OTT/VAS",
    description:
      "Games via APK and IAP, rich media content, IAP meter reading and many more.",
  },
  {
    icon: faGasPump,
    title: "Oil & Gas Trading",
    description:
      "We are expanding our services to suit increasing needs of oil, gas and petrochemical companies. Our range of products as well as our extensive, global network make us a reliable choice for supplies.",
  },
  {
    icon: faChalkboardTeacher,
    title: "Technical Training",
    description:
      "FTTH Training and Networking, Hands on Training such as Plumbing, Vehicle Repair, Air Conditioning and many more.",
  },
];

const ServicesHome = () => {
  return (
    <div className="service-container space-top">
      <div className="inner-container">
        {/* <h1 className="main-heading">WHAT WE DO</h1> */}
        <MainHeading text="WHAT WE DO" color="primary" />
        <div className="service-list">
          {services.map((service, i) => (
            <Card key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
