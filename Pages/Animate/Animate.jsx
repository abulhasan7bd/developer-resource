import React from "react";
import "./Animate.css";
import Card from "../Card/Card";
import { animated } from "./../../Data/Animated";
import Practicetemplate from "../Practicetemplate";
import WebsiteIdea from "../WebsiteIdea";
const Animate = () => {
  return (
    <section id="template">
      <div className="container">
        <div className="template-content">
          <h2>Website Animation Design Studio</h2>
          <div className="template-cards">
            {animated.map((card) => {
              return <Card card={card} />;
            })}
          </div>
          <Practicetemplate/>
          <WebsiteIdea/>
        </div>
      </div>
    </section>
  );
};

export default Animate;
