import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Header.scss';

const Header = () => {

  const isLoggedIn = localStorage.getItem('access_token') !== null;


  return (
    <>
    
   

    <div className='collected-Nav'>
    <header>
    <img className="Top-logo"
    src={require("../../../Assets/Images/logo.png")}
    alt="logo"
  />
        <nav>
       
            <Link to="/" className='Links'> <li className="header__menu">FORSIDE</li></Link>
            <Link to="/HotellerDestinationer" className='Links'> <li className="header__menu">HOTELLER & DESTNATIONER</li></Link>
            <Link to="/Værelser" className='Links'> <li className="header__menu">VÆRELSER</li></Link>
            <Link to="/Reservation" className='Links'> <li className="header__menu">RESERVATION</li></Link>
            {/* <Link to="/login" className='Links'> <li className="header__menu">LOGIN</li></Link> */}
            {isLoggedIn ? (
                <span className='Links'><li className="header__menu">CONNECTED</li></span>
              ) : (
                <Link to="/login" className='Links'><li className="header__menu">LOGIN</li></Link>
              )}
        </nav>
    </header>
    <main>
      <Outlet />
    </main>
    </div>
    
    </>
    

  )
}

export default Header;
