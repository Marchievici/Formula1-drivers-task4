import { useState } from "react";

export function CardComponent({ driver, onIncrement, index }) {
  index += 1;

  const { firstName, lastName, hex, points, team, country, image, number } =
    driver;
  return (
    <div
      className={`card ${index <= 3 && "top3"} ${driver.team
        .split(/\s/)
        .join("")}`}
    >
      <div className="score flex card-item">
        <div className="placement">{index}</div>
        <div className="nr-points flex">
          <span className="number-points">{points}</span>
          <span className="points">PTS</span>
          <button
            onClick={() => onIncrement(number)}
            style={{ backgroundColor: hex }}
            className={`btn-increase btn-increase-${index}`}
          >
            Add points
          </button>
        </div>
      </div>
      <div className="card-item">
        <div className="full-name">
          <span className="first-name">{firstName}</span>
          <span className="name">{lastName}</span>
        </div>
        <div className={`flag-icon flag-icon-${country.toLowerCase()}`}></div>
      </div>
      <div className="team">{team}</div>
      <div className="pilot-image flex">
        <div className="pilot-number">{number}</div>
        <div className="backgorund-image"></div>
        <img width="206px" height="206px" src={image} alt="Image of pilot" />
      </div>
    </div>
  );
}
