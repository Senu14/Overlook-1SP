import React, { useEffect, useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import './Forside.scss';

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
    <div className="media">
       <img src={require("../../Assets/Images/frankfurt-skyline-germany.jpg")} alt='' />
     </div>
    <div className="products-container">
      {
        data.map((products, index) => {

         return <Cards key={index} item={{image:products.images,title:products.title}}/> 

        })
      }
     
    </div>
    </>
  );
     
    
  
}
export default Forside;