import React from "react";
import "./Card.css";
const Card = ({ card }) => {
  return (
    <div className="card">
      <h3>{card.title}</h3>
      <p>{card.description}</p>
      <div className="card-button">
        <button>
          <a href={card.link}>Go to site</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
