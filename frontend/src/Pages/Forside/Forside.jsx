import React, { useEffect, useState } from 'react';
import SlideWrapper from '../../App/Elements/SlideWrapper/SlideWrapper';
import { Link } from 'react-router-dom';
import './Forside.scss';
// import cors from 'cors';
import axios from 'axios';

const Forside = () => {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:4000/news';
      const result = await axios.get(url);
      console.log(result);
      setData(result.data)  
      
    }
    getData()
  }, [setData]);
  
  return (
    <>
    <SlideWrapper />
    <div className='container'>
    <div className='news-card'>
      
{data &&
    data.slice(0,4).map((data) =>(
      <figure className='img-card' key={data.id}>
        <img
        src={`http://localhost:4000/images/${data.image.filename}`} alt="image"
        />
                
      <div className='overlay'>
        <Link to={`/HotellerDestinationer`}>
        <div className='overlay_down'>
        <h4 className='overlay_title'>{data.title}</h4>
        <p className='overlay_des'>{data.teaser}</p>
        </div>
        </Link>
        
      </div>
      </figure>
      ))} 
</div> 
</div>         
    </>
  );
     
    
  
}
export default Forside;