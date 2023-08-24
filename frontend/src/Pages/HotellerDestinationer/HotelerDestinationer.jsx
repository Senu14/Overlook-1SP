import React, { useEffect, useState } from 'react';
import SlideWrapper1 from '../../App/Elements/SlideWrapper/SlideWrapper1';
import { Link } from 'react-router-dom';
import './hotelerDestinationer.scss';
// import cors from 'cors';
import axios from 'axios';

const HotellerDestinationer = () => {
  const [hotel, sethotel] = useState([]);
  
  
  useEffect(() => {
    const gethotel = async () => {
      const url = 'http://localhost:4000/destinations/danmark';
      const result = await axios.get(url);
      console.log(result);
      sethotel(result.hotel)  
      
    }
    gethotel()
  }, [sethotel]);
  
  return (
    <>
    <SlideWrapper1 />
    <div className='news-card'>
{hotel &&
    hotel.slice(0,6).map((hotel) =>(
      <figure className='img-card' key={hotel.id}>
       
                
      <div className='overlay'>
        <Link to={`/land`}>
        <h4>{hotel.slug}</h4>
        </Link>
        
      </div>
      </figure>
      ))} 
</div>          
    </>
  );
     
    
  
}
export default HotellerDestinationer;