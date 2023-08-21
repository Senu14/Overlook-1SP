import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (
     <div className='main-Nav'>
     <header>
         <nav>
           <h1>HOTEL OVERLOOK</h1>
             <NavLink to="/"><span>Forside</span></NavLink>
             <NavLink to="/HotellerDestinationer"><span>Hoteller & Destinationer</span></NavLink>
             <NavLink to="/Værelser"><span>Værelser</span></NavLink>
             <NavLink to="/Reservation"><span>Reservation</span></NavLink>
             <NavLink to="/login"><span>LOGIN</span></NavLink>
         </nav>
     </header>
     {/* <main>
       <Outlet />
     </main> */}
     </div>
  )
}
export default Navigations;