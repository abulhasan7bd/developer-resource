import React from "react";
import "./Template.css";
import { Template_Data } from "../../Data/Template";
import Card from "../Card/Card";
import { templatebtns } from "./../../Data/Templatesbtns";
const Template = () => {
  return (
    <section id="template">
      <div className="container">
        <div className="template-content">
          <h2>Website Theme And Template Desigh</h2>
          <div className="template-cards">
            {Template_Data.map((card) => {
              return <Card card={card} />;
            })}
          </div>
          <div className="template-btns">
            {templatebtns.map((button) => {
              return (
                <button>
                  <a href={button.button}>{button.name}</a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
