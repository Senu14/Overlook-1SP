import React from 'react';
import './Cards.scss'

const Cards = ({ item }) => {
    return (
        <div className='product-card'>
            <img src={item.image} alt="Products" />
            <h3>{item.title}</h3>
            
        </div>
    );
}

export default Cards;