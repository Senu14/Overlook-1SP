import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import './Forside.scss';
import cors from 'cors';

const Forside = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fatchData = async () => {
      try { 
        const response = await fetch('http://localhost:4000/news');
        const jsonData = await response.json();
        setData(jsonData.slice(0,12));
      }catch (error) { 
        console.log('error fetching data:', error);
      }
    };
    fatchData();
  }, []);
  
  return (
    <>
    <header className="media">
    {/* <img src={process.env.PUBLIC_URL + '../../Assets/Images/frankfurt-skyline-germany.jpg'} alt="media" /> */}
       <img src={require("../../Assets/Images/frankfurt-skyline-germany.jpg")} alt='media' />
     </header>
    <div className="news-container">
      {
        data.map((news, index) => {

         return <Cards key={index} item={{image:news.images,title:news.title, 
                                          teaser:news.teaser, filname:news.filname}}/> 

        })
      }
     
    </div>
    </>
  );
     
    
  
}
export default Forside;