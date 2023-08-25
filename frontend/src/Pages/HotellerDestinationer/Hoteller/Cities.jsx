import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import CityCard from './CitieCard';
import './citie.scss'

const Cities = () => {
  const [cities, setCities] = useState([]);
  const { slug } = useParams(); // Destructure the slug param from the URL



  useEffect(() => {
    axios.get(`http://localhost:4000/destinations/${slug}`)
      .then((response) => {
        setCities(response.data.cities);
  
        // Call the /imagelist endpoint to get the image URLs
        axios.get('http://localhost:4000/imagelist')
          .then((imageResponse) => {
            // Update the cities object with the correct image URLs
            const updatedCities = response.data.cities.map(city => {
              const image = imageResponse.data.find(img => img.id === city.image_id);
              if (image) {
                city.CityImage = {
                  city_image_filename: image.filename,
                  city_image_title: image.title
                };
              }
              return city;
            });
  
            setCities(updatedCities);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);
  

  return (
    <div className='container'>
      <div className="wallpaper"></div>
      <div className="bar">
        <ul>
        <li>Danmark</li>
        <li>Sverige</li>
        <li>Norge</li>
        <li>Finland</li>
        <li>Island</li>
        <li>Tyskland</li>
        <li>Polen</li>
        </ul>
      </div>
      <h3>Cities in {slug}</h3>
      <div className="cards">
      {cities.map((city, index) => (
        <CityCard key={index} city={city} />
      ))}
      </div>
    </div>
  );
};

export default Cities;
