import React from "react";
import { preactice } from "../Data/Practice";
const Practicetemplate = () => {
  return (
    <div id="practice-template">
      <div className="container">
        <div className="template-content">
          <h2>Templates to practise</h2>
          <div className="template-btns">
            {preactice.map((button) => {
              return (
                <button>
                  <a href={button.button}>{button.name}</a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practicetemplate;
