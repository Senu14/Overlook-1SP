import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.scss';
import { Navigate } from 'react-router-dom';


function Reservation () {

  const isLoggedIn = localStorage.getItem('access_token') !== null;


  const [fornavn, setFornavn] = useState('');
  const [efterNavn, setEfternavn] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [startDate, setStartDate] = useState(''); // Starting date
  const [endDate, setEndDate] = useState('');     // Ending date
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [hotel, setHotel] = useState('');
  const [værelse, setVarelse] = useState('');
  const [personer, setPersoner] = useState('');
  const [Kommentarer, setKommentarer] = useState('');

  const handleHotelChange = (event) => {
    setHotel(event.target.value)
    // event.handleHotelChange();
  }

  const handleVærelseChange = (event) => {
    setVarelse(event.target.value)
  }

  const handlePersonerChange = (event) => {
    setPersoner(event.target.value);
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const reservationData = {
      fornavn,
      efterNavn,
      email,
      telefon,
      startDate,
      endDate,
      hotel,
      værelse,
      personer,
      Kommentarer,
    }
  console.log(reservationData); 

  const url = `http://localhost:4000/reservations`; 

  axios
  .post(url, reservationData)
  .then((response) => { // Fixed syntax here
    setSuccessMessage("reservation completed");
    setErrorMessage('');
  })
  .catch((error) => { // Fixed syntax here
    setErrorMessage('something wrong happened, try again');
    console.error("the problem is : ", error);
  });
}

if (!isLoggedIn) {
  return <Navigate to="/login" />; // Redirect to login if not logged in
}


  return (
    <div className="reservation-form">
      <h2>Reservation</h2>
      <p>Udfyld nedenstående formular for at reservere et af vores værelser.</p>
      <form onSubmit={handleSubmit}>

      <div className="form-group">
          <select value={hotel} onChange={handleHotelChange}>
            <option>Vælg destination & hotel</option>
            <option value="1">option</option>
            <option value="2">option</option>
            <option value="3">option</option>
          </select>
        </div>

        <div style={{ display: "flex", gap: "1rem" }}>
        <div className="group-værelse" style={{ flex: 1}}>
          <select value={værelse} onChange={handleVærelseChange} style={{ width: "100%" }}>
            <option>Værelsestype</option>
            <option value="1">1 værelse</option>
            <option value="2">2 værelse</option>
            <option value="3">3 værelse</option>
          </select>
        </div>
        
        
        
        <div className="group-personer"style={{ flex: 1 }}>
          <select value={personer} onChange={handlePersonerChange} style={{ width: "100%" }}>
            <option>Antal personer</option>
            <option value="1">1 personer</option>
            <option value="2">2 personer</option>
            <option value="3">3 personer</option>
          </select>
        </div>
        </div>

        <h4>Vælg Prisklasse</h4>
        <label>
          <input type="radio" name="Pris" value="Normal"/> Normal
        </label>
        <label>
          <input type="radio" name="Pris" value="Flex"/> Flex
        </label>

{/* kmmenter her*/}
        <div style={{ display: "flex", gap: "1rem" }}>
        <div className="form-date" style={{ flex: 1 }}>
          <input type="date" value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required style={{ width: "90%" }}/>
        </div>

        <div className="form-date" style={{ flex: 1 }}>
          <input type="date" value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          required style={{ width: "90%" }}/>
        </div>
        </div>
        
{/* kmmenter her*/}
        <label className='mini-form'>
          <input type="text" 
          placeholder="Fornavn" value={fornavn} 
          onChange={(e) => setFornavn(e.target.value)} />
        </label>
        <br />

        <label className='mini-form'>
          <input type="text" 
          placeholder="Efternavn" value={efterNavn} 
          onChange={(e) => setEfternavn(e.target.value)} />
        </label>
        <br />
{/* kmmenter her*/}

        <div style={{ display: "flex", gap: "1rem" }}>
        <label className='mini-info' style={{ flex: 1}}>
          <input type="email" 
          placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }}/>
        </label>
        <br />

        <label className='mini-info' style={{ flex: 1 }}>
          <input type="number" 
          placeholder="Telefon" value={telefon} 
          onChange={(e) => setTelefon(e.target.value)} style={{ width: "107%" }} />
        </label>
        <br />
        </div>

{/* kmmenter her*/}
        <label for="Textarea"></label>
    <textarea placeholder="Kommentarer" value={Kommentarer} id="Textarea" rows="4" cols="39"></textarea>

    <label className='kryds'>
        <input type="radio" name="Pris" value="kryds"/> Jeg accepterer hermed Overlooks betingelser (sæt kryds)
    </label>

        <div className="form-button">
          <button type="submit">Send Reservation</button>
          <button type="submit">Annuller</button>
        </div>
      </form>
    </div>
  );
}

export default Reservation;