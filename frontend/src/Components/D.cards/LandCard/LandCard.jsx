import React from 'react'
import './LandCard.scss'

const LandCard = ({ image, city, description, date }) => {
  return (
    <div className="card">
      <img src={image}  alt={city} className="card-image" />
    <div className="card-content">
      <h3 className="card-title">{city}</h3>
  </div>
 </div>
);
};

export default LandCard ;
