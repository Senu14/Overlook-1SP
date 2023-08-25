import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './LandCard.scss'


const LandCard = () => {
const [card, setCard] = useState([]);
        return (
          
          <div className="card">
            <img src={`http://localhost:4000/images/${card.CountryImage}`} className="card-image" />

            <div className="card-content">
            
            <Link to={`/land`}>
            <h4>{card.slug}</h4>
            <p>{card.description}</p>
            </Link>
        
      </div>
     </div>
  
          
        );
      };
// }
export default LandCard;
