import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLoggedIn = 
  localStorage.getItem('access_token') !== null;
 

  return (
    <>
    <header className="header">
    {/* <a href="http://localhost:3000/" class="nav-link"> */}
    <img className="Top-logo"
    src={require("../../../Assets/Images/logo.png")}
    alt="logo"
  />
  {/* </a> */}
    
      <button className="header__burger" onClick={toggleMenu}>
      </button>
      {isOpen && (
        <ul className="header__menu">
         <Link to="/"   className='Links'> <li className="header__menu-item">FORSIDE</li></Link>
         <Link to="/HotellerDestinationer"   className='Links'><li className="header__menu-item">H&D</li></Link>
         <Link to="/Værelser"  className='Links'><li className="header__menu-item">VÆRELSER</li></Link>
         <Link to="/Reservation"  className='Links'> <li className="header__menu-item">RESERVATION</li></Link>
         {isLoggedIn ? (
                <span className='Links'><li className="header__menu-item">CONNECTED</li></span>
              ) : (
                <Link to="/login" className='Links'><li className="header__menu-item">LOGIN</li></Link>
              )}
        </ul>
      )}
    </header>

    <main>
      <Outlet />
    </main>
    </>
    

  )
}

export default Header;
