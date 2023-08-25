import React, { useEffect, useState } from 'react';
 import SlideWrapper1 from '../../App/Elements/SlideWrapper/SlideWrapper1';
import { Link } from 'react-router-dom';
import LandCard from '../../Components/LandCard/LandCard';
import './hotelerDestinationer.scss';

// import cors from 'cors';
import axios from 'axios';

const HotellerDestinationer = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/destinations') // Make sure this URL is correct
      .then((response) => {
        console.log('destinations data:', response.data);
        setDestinations(response.data);
      })
      .catch((error) => {
        console.error('An error occurred while fetching destinations:', error);
      });
  }, []);
  


  return (
    <>
          <SlideWrapper1 />
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
      <div className="content">
        <div className="left">
          <h4>this is left side</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam mollitia vero perferendis dignissimos. Iure unde animi alias magnam, praesentium, in atque, voluptates veniam dolorum odio suscipit tempora sit quas repellendus!</p>
          <div className="cards">
            {destinations.map((reservation, index) => (
              <LandCard key={index} {...reservation} />
            ))}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
    </>
  );
};
export default HotellerDestinationer;