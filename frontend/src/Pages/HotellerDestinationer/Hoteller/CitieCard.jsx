import React from 'react'
import './citieCard.scss'
// CityCard.jsx
const CitieCard = (props) => {
  const { city } = props; // Destructuring the city object from props

  return (
  
    <div className="card">
      <img src={city.CityImage?.city_image_filename} alt={city.CityImage?.city_image_title} className="card-image"  />
      <div className="card-content">
         <h3 className="card-title">{city.name}</h3>
    </div>
    </div>
    

  );
};

export default CitieCard

