import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Measurements() {
  const [formData, setFormData] = useState({
    heightFeet: '',
    heightInches: '',
    weight: '',
    bloodPressure: '',
    bodyTemperature: '',
    pulseRate: '',
    cholesterol: '',
    date: new Date().toISOString().slice(0, 10) // Defaults to today's date
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert height from feet and inches to centimeters if needed
    const heightInCentimeters = parseInt(formData.heightFeet) * 30.48 + parseInt(formData.heightInches) * 2.54;
    console.log('Height in cm:', heightInCentimeters);

    if (formData.heightFeet <= 0 || formData.weight <= 0) {
      alert("Please enter valid height and weight!");
      return;
    }

    console.log('Submitting measurements:', {
      ...formData,
      height: heightInCentimeters
    });
    // API call to save the measurements
    navigate('/dashboard');  // Redirect or show success message
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <div>
      <h1>Enter Your Health Measurements</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" name="heightFeet" value={formData.heightFeet} onChange={handleChange} placeholder="Height (Feet)" required />
        <input type="number" name="heightInches" value={formData.heightInches} onChange={handleChange} placeholder="Height (Inches)" required />
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (lbs)" required />
        <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} placeholder="Blood Pressure (e.g., 120/80)" required />
        <input type="number" name="bodyTemperature" value={formData.bodyTemperature} onChange={handleChange} placeholder="Body Temperature (in °F)" />
        <input type="number" name="pulseRate" value={formData.pulseRate} onChange={handleChange} placeholder="Pulse Rate (beats per minute)" />
        <input type="text" name="cholesterol" value={formData.cholesterol} onChange={handleChange} placeholder="Cholesterol (mg/dL)" />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <button type="submit">Submit Measurements</button>
      </form>
    </div>
  );
}

export default Measurements;
