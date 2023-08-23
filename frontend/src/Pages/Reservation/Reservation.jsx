import React, { useState } from 'react';
import axios from 'axios';
import './Reservation.scss';

function Reservation () {

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
        <div className="group-værelse" style={{ flex: 3 }}>
          <select value={værelse} onChange={handleVærelseChange} style={{ width: "100%" }}>
            <option>Vælg værelsestype</option>
            <option value="1">1 værelse</option>
            <option value="2">2 værelse</option>
            <option value="3">3 værelse</option>
          </select>
        </div>
        
        
        
        <div className="group-personer"style={{ flex: 1 }}>
          <select value={personer} onChange={handlePersonerChange} style={{ width: "310%" }}>
            <option>Vælg antal personer</option>
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
        <div style={{ display: "flex", gap: "7rem" }}>
        <div className="form-date" style={{ flex: 2 }}>
          <input type="date" value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
          required style={{ width: "130%" }}/>
        </div>

        <div className="form-date" style={{ flex: 1 }}>
          <input type="date" value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
          required style={{ width: "130%" }}/>
        </div>
        </div>
        
{/* kmmenter her*/}
        <label>
          <input className='mini-form' type="text" 
          placeholder="Fornavn" value={fornavn} 
          onChange={(e) => setFornavn(e.target.value)} />
        </label>
        <br />

        <label>
          <input  className='mini-form' type="text" 
          placeholder="Efternavn" value={efterNavn} 
          onChange={(e) => setEfternavn(e.target.value)} />
        </label>
        <br />

        <label>
          <input className='mini-form' type="email" 
          placeholder="Email" value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />



{/* kmmenter her*/}
        <label>
          <input type="number" 
          placeholder="Telefon" value={telefon} 
          onChange={(e) => setTelefon(e.target.value)} />
        </label>
        <br />

        <div className="form-group">
          <button type="submit">Send Reservation</button>
        </div>
      </form>
    </div>
  );
}

export default Reservation;