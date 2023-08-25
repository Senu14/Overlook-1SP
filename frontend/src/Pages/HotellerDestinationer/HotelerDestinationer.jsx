import React, { useEffect, useState } from 'react';
import SlideWrapper1 from '../../App/Elements/SlideWrapper/SlideWrapper1';
import { Link } from 'react-router-dom';
import LandCard from '../../Components/LandCard/LandCard';
import './hotelerDestinationer.scss';
// import cors from 'cors';
import axios from 'axios';


const HotellerDestinationer = () => {
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/destinations') // Make sure this URL is correct
      .then((response) => {
        // console.log(response.data);
        // Call the /imagelist endpoint to get the image URLs
        axios.get('http://localhost:4000/imagelist')
          .then((imageResponse) => {
            // Update the destination object with the correct image URLs
            const updatedDestinations = response.data.map(item => {
              const image = imageResponse.data.find(img => img.id === item.image_id);
              if (image) {
                item.CountryImage = {
                  country_image_filename: image.filename, // This line was updated
                  country_image_title: image.title
                };
              }
              return item;
            });
  
            setDestination(updatedDestinations);
          });
      })
      .catch((error) => {
        console.error('An error occurred while fetching reservations:', error);
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
{destination.map((item, index) => {
            return (
              <Link to={`/destinations/${item.slug}`} key={index}> 
                <LandCard
                  // image={item.CountryImage.country_image_filename}
                  image={`http://localhost:4000/images/${item.CountryImage.country_image_filename}`}

                  city={item.name}
                />
              </Link>
            );
          })}
    </div>
  </div>
<div className="right"></div>
  </div>
</div>
</>
  );
};
export default HotellerDestinationer;