import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Header.scss';

const Header = () => {
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
            <Link to="/Hoteller & Destinationer" className='Links'> <li className="header__menu">HOTELLER & DESTNATIONER</li></Link>
            <Link to="/Værelser" className='Links'> <li className="header__menu">VÆRELSER</li></Link>
            <Link to="/Reservation" className='Links'> <li className="header__menu">RESERVATION</li></Link>
            <Link to="/login" className='Links'> <li className="header__menu">LOGIN</li></Link>
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
