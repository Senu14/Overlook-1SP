import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss'; // You can create your own stylesheet for custom styling

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <h2>Carousel Example</h2>
      <Slider {...settings}>
        <div className="carousel-item">Item 1</div>
        <div className="carousel-item">Item 2</div>
        <div className="carousel-item">Item 3</div>
        {/* Add more items */}
      </Slider>
    </div>
  );
}

export default Carousel;
