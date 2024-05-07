import React from 'react';

function ViewCalendar() {
    // Simulating some calendar events
    const events = [
        { date: "2024-05-01", event: "Consultation with John" },
        { date: "2024-05-02", event: "Follow-up with Jane" }
    ];

    return (
        <div>
            <h1>View Calendar</h1>
            <ul>
                {events.map(event => (
                    <li key={event.date}>{event.date} - {event.event}</li>
                ))}
            </ul>
        </div>
    );
}

export default ViewCalendar;
