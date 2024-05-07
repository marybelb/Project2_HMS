import React from 'react';
import { useNavigate } from 'react-router-dom';

function Doctor() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Medical Professional Dashboard</h1>
            <button onClick={() => navigate('/browse-patients')}>Browse Patients</button>
            <button onClick={() => navigate('/assign-device')}>Assign Medical Device</button>
            <button onClick={() => navigate('/alerts-scheduling')}>Alerts & Scheduling</button>
            <button onClick={() => navigate('/input-data')}>Input Data for Patients</button>
            <button onClick={() => navigate('/chat-with-patients')}>Chat with Patients</button>
            <button onClick={() => navigate('/transcripts')}>Read Transcripts</button>
            <button onClick={() => navigate('/search-messages')}>Search in Messages</button>
            <button onClick={() => navigate('/view-calendar')}>View Calendar</button>
            <button onClick={() => navigate('/view-appointments')}>View Appointments</button>
        </div>
    );
}

export default Doctor;
