import React, { useState } from 'react';

function ChatWithPatients() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages(prev => [...prev, { id: prev.length + 1, text: input }]);
            setInput('');
        }
    };

    return (
        <div>
            <h1>Chat with Patients</h1>
            <div>
                {messages.map(msg => (
                    <div key={msg.id}>{msg.text}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatWithPatients;
