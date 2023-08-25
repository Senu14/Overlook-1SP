import React from 'react';
import './Cards.scss'

const Cards = ({ item }) => {
    return (
        <div className='news-card'>
            <img src={item.image} alt="" />
            <h3>{item.title}</h3>
            <h1>{item.filname}</h1>
            <p>{item.teaser}</p>
            
        </div>
    );
}

export default Cards;