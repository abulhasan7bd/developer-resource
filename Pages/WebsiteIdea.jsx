import React from "react";
import { Website_Link } from "./../Data/Website-link";
const WebsiteIdea = () => {
  return (
    <div id="practice-template">
      <div className="container">
        <div className="template-content">
          <h2>Simple Template web idea them,color,font etc</h2>
          <div className="template-btns">
            {Website_Link.map((button) => {
              return (
                <button>
                  <a href={button.link}>{button.title}</a>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteIdea;
