import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.scss';



export default function Header() {
  return (
    <div className='collected-Nav'>
    <header>
        <nav>
            <Link to="/" className='Links'> <li className="header__menu">FORSIDE</li></Link>
            <Link to="/Hoteller & Destinationer" className='Links'> <li className="header__menu">HOTELLER & DESTNATIONER</li></Link>
            <Link to="/Værelser" className='Links'> <li className="header__menu">VÆRELSER</li></Link>
            <Link to="/Reservation" className='Links'> <li className="header__menu">Reservation</li></Link>
            <Link to="/login" className='Links'> <li className="header__menu">LOGIN</li></Link>
        </nav>
    </header>
    <img src={require("../../../Assets/Images/frankfurt-skyline-germany.jpg")}className="media" alt='' />
    <main>
      <Outlet />
    </main>
    </div>
  )
}
