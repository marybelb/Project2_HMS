import React from 'react';

function BrowsePatients() {
    // Simulated data that might come from an API
    const patients = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Jane Smith" },
        { id: 3, name: "Alice Johnson" }
    ];

    return (
        <div>
            <h1>Browse Patients</h1>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>{patient.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BrowsePatients;
