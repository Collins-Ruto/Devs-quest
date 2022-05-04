import React from "react";
import cardImage from "../images/pro-2.jpg";
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import "font-awesome/css/font-awesome.min.css";

export default function CardInfo() {
  return (
    <div className="cardInfo">
      <div>
        <img src={cardImage} className="cardImage" alt=""></img>
      </div>
      <h1>Collins Ruto</h1>
      <h4>Web & software developer</h4>
      <div className="cardButtons">
        <button className="cardButton-1">
          <i className="fa-solid fa-at" /> Email
        </button>
        <button className="cardButton-2">
          <i class="fa-brands fa-linkedin fa-linkdn" /> LinkedIn
        </button>
      </div>
    </div>
  );
}
