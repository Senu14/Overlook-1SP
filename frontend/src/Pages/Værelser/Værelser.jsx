import React, { useEffect, useState } from 'react';
import SlideWrapper from '../../App/Elements/SlideWrapper/SlideWrapper';
import { Link } from 'react-router-dom';
import './Værelser';
// import cors from 'cors';
import axios from 'axios';

const Værelser = () => {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:4000/destinations/danmark/aalborg/overlook-aalborg-city/standard';
      const result = await axios.get(url);
      console.log(result);
      setData(result.data)  
      
    }
    getData()
  }, [setData]);
  
  return (
    <>
    <SlideWrapper />
    <div className='news-card'>

      <figure className='img-card' key={data.id}>
        <img
        src={`http://localhost:4000/imagelist/${data.filename}`} alt="image"
        />
                
      <div className='overlay'>
        <Link to={`/hotels`}>
        <h4>{data.name}</h4>
        </Link>
        
      </div>
      </figure>
   
     
     
</div>          
    </>
  // );
  ) } 
    
  

export default Værelser