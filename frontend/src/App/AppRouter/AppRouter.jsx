import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import All Pages
import Forside from '../../Pages/Forside/Forside';
import HotellerDestinationer from '../../Pages/HotellerDestinationer/HotelerDestinationer';
import Værelser from '../../Pages/Værelser/Værelser';
import Reservation from '../../Pages/Reservation/Reservation';
import Login from '../../Pages/Login/Login';
import Cities from '../../Pages/HotellerDestinationer/Hoteller/Cities';
//Layouts that wrapped the other pages
import Navigation from '../../Components/Navigations/Navigations';

const AppRouter = () => {
  return (
     <Routes>
     <Route index path="/" element={<Forside />} />
     <Route path= "/" element={<Navigation />} />
     <Route path="HotellerDestinationer" element={<HotellerDestinationer />}>
       </Route>
     <Route path="/Værelser" element={<Værelser />} />
     <Route path="/Reservation" element={<Reservation />} />
     <Route path="/login" element={<Login/>} />
     <Route path="/destinations/:slug" element={<Cities/>} />

</Routes>
  )
}

export default AppRouter;