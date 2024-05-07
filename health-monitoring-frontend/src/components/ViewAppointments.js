import React, { useState } from 'react';

function ViewAppointments() {
    const [appointments, setAppointments] = useState([
        { id: 1, detail: "Appointment with John Doe on May 5th" },
        { id: 2, detail: "Checkup for Alice on May 6th" }
    ]);

    return (
        <div>
            <h1>View Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>{appointment.detail}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewAppointments;
