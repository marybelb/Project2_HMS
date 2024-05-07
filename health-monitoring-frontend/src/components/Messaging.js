import React, { useState } from 'react';

function Messaging() {
    const [message, setMessage] = useState('');
    const [video, setVideo] = useState(null);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audio, setAudio] = useState(null);

    // Text message handling
    const handleTextSubmit = (event) => {
        event.preventDefault();
        console.log('Sending message:', message);
        // API call to send message
        setMessage('');
    };

    // Video handling
    const handleVideoChange = (event) => {
        setVideo(event.target.files[0]);
    };

    const handleVideoUpload = () => {
        const formData = new FormData();
        formData.append('video', video);
        console.log('Uploading video:', video.name);
        // API call to upload video
    };

    // Audio handling
    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const recorder = new MediaRecorder(stream);
                recorder.start();
                setMediaRecorder(recorder);
                setRecording(true);

                const audioChunks = [];
                recorder.ondataavailable = (event) => {
                    audioChunks.push(event.data);
                };
                recorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, {type: 'audio/mp3'});
                    setAudio(audioBlob);
                };
                
            });
    };

    const stopRecording = () => {
        mediaRecorder.stop();
        setRecording(false);
    };

    return (
        <div>
            <h1>Messages</h1>
            <form onSubmit={handleTextSubmit}>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows="3"
                />
                <button type="submit">Send Message</button>
            </form>
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <button onClick={handleVideoUpload} disabled={!video}>Upload Video</button>
            <button onClick={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Recording' : 'Record Voice Note'}
            </button>
            {audio && <audio controls src={URL.createObjectURL(audio)} />}
        </div>
    );
}

export default Messaging;
