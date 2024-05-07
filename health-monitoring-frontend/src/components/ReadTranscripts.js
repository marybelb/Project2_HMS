import React, { useState } from 'react';

function ReadTranscripts() {
    const [transcripts, setTranscripts] = useState([
        { id: 1, content: "Transcript 1 text..." },
        { id: 2, content: "Transcript 2 text..." }
    ]);

    return (
        <div>
            <h1>Read Transcripts</h1>
            <ul>
                {transcripts.map(transcript => (
                    <li key={transcript.id}>{transcript.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default ReadTranscripts;
