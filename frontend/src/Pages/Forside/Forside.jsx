import React, { useEffect, useState } from 'react';
// import Cards from '../../Components/Cards/Cards';
// import { ContentWrapper } from '../../App/Elements/ContentWrapper/ContentWrapper';
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
    <div className='news-card'>
{data &&
    data.slice(0,6).map((data) =>(
      <figure className='img-card' key={data.id}>
        <img
        src={`http://localhost:4000/images/${data.image.filename}`} alt="image"
        />
                
      <div className='overlay'>
        <Link to={`/hotels`}>
        <h4>{data.title}</h4>
        </Link>
        
      </div>
      </figure>
      ))} 
</div>          
    </>
  );
     
    
  
}
export default Forside;