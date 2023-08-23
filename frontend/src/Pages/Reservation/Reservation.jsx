// ReservationForm.js
import React, { useState } from 'react';

const ReservationForm = () => {
  const [hotel, sethotel] = useState('1');
  const [værelse, setværelse] = useState('');
  const [personer, setpersoner] = useState('');
  const [date, setDate] = useState('');



  const handlehotelChange = (event) => {
    sethotel(event.target.value);
  };

  const handleværelseChange = (event) => {
    setværelse(event.target.value);
  };

  const handlepersonerChange = (event) => {
    setpersoner(event.target.value);
  };
  
 const handleDateChange = (event) => {
    setDate(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Her kan du håndtere formularindsendelsen (form submission), 
    //fx sende reservationsdata til en server.
    console.log('Reservation submitted:', { hotel, værelse, personer, date  });
  };

  return (
    <div>
      <h2>Reservation</h2>
      <p>Udfyld nedenstående formular for at reservere et af vores værelser.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <select value={hotel} onChange={handlehotelChange}>
            <option value="1">Vælg destination & hotel</option>
            <option value="2"> option</option>
            <option value="3"> option</option>
            <option value="4"> option</option>
           
          </select>
        </div>
        <div>
  {/* <label>hotel:</label> */}
    <select value={værelse} onChange={handleværelseChange}>
      <option value="1">Vælg værelsestype</option>
      <option value="2">2 værelse</option>
      <option value="3">3 værelse</option>
      <option value="4">4 værelse</option>
    </select>
  </div>

  <div>
  
  <select value={personer} onChange={handlepersonerChange}>
    <option value="1">Vælg antal personer</option>
    <option value="2">2 personer</option>
    <option value="3">3 personer</option>
    <option value="4">4 personer</option>
  </select>
</div>
      <div>
    <label>Date:</label>
  <input type="date" value={date} onChange={handleDateChange} required />
    </div>
    
    <div>
      <button type="submit">Send Reservation</button>
    </div>
  </form>
  </div>
  );
};

export default ReservationForm;
