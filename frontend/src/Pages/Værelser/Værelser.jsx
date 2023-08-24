import React, { useEffect, useState } from 'react';
import SlideWrapper2 from '../../App/Elements/SlideWrapper/SlideWrapper2';
import { Link } from 'react-router-dom';
import './Værelse.scss';
// import cors from 'cors';
import axios from 'axios';

const Værelser = () => {
  const [room, setroom] = useState([]);
  
  
  useEffect(() => {
    const getroom = async () => {
      const url = 'http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard';
      const result = await axios.get(url);
      console.log(result);
      setroom(result.room)  
      
    }
    getroom()
  }, [setroom]);
  
  return (
    <>
    <SlideWrapper2 />
    <div className='news-card'>
{room &&
    room.slice(0,6).map((room) =>(
      <figure className='img-card' key={room.id}>
        <img
        src={`http://localhost:4000/imagelist/${room.country.image.filename}`} alt="image"
        />
                
      <div className='overlay'>
        <Link to={`/room`}>
        <h4>{room.name}</h4>
        </Link>
        
      </div>
      </figure>
      ))} 
</div>          
    </>
  );

 
} 
    
  

export default Værelser