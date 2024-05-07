import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Appointment() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking appointment for:', date, time);
    // Here you would handle the API call to book the appointment
    navigate('/dashboard'); // Redirect back to dashboard or to a confirmation page
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={e => setTime(e.target.value)} required />
        </label>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default Appointment;
