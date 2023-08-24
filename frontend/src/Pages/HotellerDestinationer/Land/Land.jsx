import React, { useState } from 'react';
import '.Land.scss'; // Import your CSS

function CardWithPopup() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        {/* Card content */}
      </div>
      {isPopupVisible && <div className="popup">Popup content</div>}
    </div>
  );
}

function CardWithPopup ();
import React, { useState } from 'react';
import './CardWithPopup.css'; // Import your CSS

function CardWithPopup() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopupVisible(true);
  };

  const handleMouseLeave = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className="card-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card">
        {/* Card content */}
      </div>
      {isPopupVisible && <div className="popup">Popup content</div>}
    </div>
  );
}

export default CardWithPopup;
