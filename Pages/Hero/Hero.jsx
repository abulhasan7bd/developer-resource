import React from "react";
import "./Hero.css";
import hero_img from "../../assets/hero.avif";
import hero_overlay from "../../assets/overlay.jpg";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h3>Hi Developers..</h3>
            <h2>
              Every website developer <br /> needs effective tools and resources.
            </h2>
            <button>Explore your coding journey in the world</button>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img src={hero_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
