import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import headerImage from '../../Assets/Images/frankfurt-skyline-germany.jpg'; 
import './Forside.scss';
// import cors from 'cors';
import axios from 'axios';

const Forside = () => {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const fatchData = async () => {
      try { 
        const response = await axios.get('http://localhost:4000/news');
        setData(response.data);
        const jsonData = await response.json();
        (jsonData.slice(0,3));
      }catch (error) { 
        console.log('error fetching data:', error);
      }
    };
    fatchData();
  }, []);
  
  return (
    <>
     <header>
     <img src={headerImage} alt="Header" />
     </header>

     
    <div className="news-container">
      {
        data.map((item, index) => {

         return <Cards key={index} item={{image:item.images,title:item.title, 
                                          teaser:item.teaser, filname:item.filname}}/> 

        })
      }
     
    </div>
    </>
  );
     
    
  
}
export default Forside;