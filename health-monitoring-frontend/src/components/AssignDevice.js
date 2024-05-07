import React, { useState } from 'react';

function AssignDevice() {
    const [patientId, setPatientId] = useState('');
    const [deviceId, setDeviceId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Mock submitting data and receiving a success response
        console.log(`Assigning device ${deviceId} to patient ${patientId}`);
        alert(`Device ${deviceId} assigned to patient ${patientId}`);
    };

    return (
        <div>
            <h1>Assign Medical Device</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Patient ID"
                />
                <input
                    type="text"
                    value={deviceId}
                    onChange={(e) => setDeviceId(e.target.value)}
                    placeholder="Device ID"
                />
                <button type="submit">Assign Device</button>
            </form>
        </div>
    );
}

export default AssignDevice;
