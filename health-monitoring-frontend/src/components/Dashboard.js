import React from 'react';
import { useNavigate} from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const goToMessaging = () => {
    navigate('/messaging');
  };

  const goToMeasurements = () => {
    navigate('/measurements');
  };

  const goToAppointment = () => {
    navigate('/appointment'); // Update the route to match your appointment booking page
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={goToMessaging}>Go to Messaging</button>
      <button onClick={goToMeasurements}>Enter Health Measurements</button>
      <button onClick={goToAppointment}>Book Appointment</button>
    </div>
  );
}

export default Dashboard;
