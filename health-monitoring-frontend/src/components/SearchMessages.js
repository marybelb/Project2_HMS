import React, { useState } from 'react';

function SearchMessages() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello, how are you?" },
        { id: 2, text: "Reminder: Appointment tomorrow at 10 AM." }
    ]);
    const [search, setSearch] = useState('');

    const filteredMessages = messages.filter(msg => msg.text.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <h1>Search in Messages</h1>
            <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search messages..."
            />
            <ul>
                {filteredMessages.map(msg => (
                    <li key={msg.id}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchMessages;
