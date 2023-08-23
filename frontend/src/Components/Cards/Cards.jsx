import React from 'react';
import './Cards.scss'
import { Link } from 'react-router-dom'

const Cards = ({ item }) => {
    return (
        <div className='news-card'>
            {item.image && item.image.filename && (
            <Link to={`/hotels`}>
            <img src={`http://localhost:4000/images/${item.image.filename}`} alt={item.title} />
            </Link>
             )}

            <div className='overlay'>
            <Link to={`/hotels`}>
              <h2>{item.title}</h2>
            </Link>
            <p>{item.teaser}</p>
            </div>
            
            
        </div>
    );
}

export default Cards;