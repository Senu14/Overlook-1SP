import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigations = () => {
  return (

     <div className='main-Nav'>
     <header>
         <nav>
           <ul>
            <li>
             <NavLink to="/"><span>Forside</span></NavLink>
             </li>
             <li>
             <NavLink to="/Hoteller & Destinationer"><span>Hoteller & Destinationer</span></NavLink>
             </li>
             <li>
             <NavLink to="/Værelser"><span>Værelser</span></NavLink>
             </li>
             <li>
             <NavLink to="/Reservation"><span>Reservation</span></NavLink>
             </li>
             <li>
             <NavLink to="/login"><span>LOGIN</span></NavLink>
             </li>
             </ul>
         </nav>
     </header>
     {/* <main>
       <Outlet />
     </main> */}
     </div>
     
  )
}
export default Navigations;