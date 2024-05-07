import React, { useState } from 'react';

function AlertsScheduling() {
    const [formData, setFormData] = useState({
        patientId: '',
        condition: '',
        threshold: '',
        alertType: 'Email',  // Default alert type
        frequency: 'Daily'  // Default frequency
    });
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting alert setup:', formData);
        // Simulate API call success
        setSubmissionSuccess(true);
        setTimeout(() => setSubmissionSuccess(false), 5000);  // Display success message temporarily
        // Reset form after submission
        setFormData({
            patientId: '',
            condition: '',
            threshold: '',
            alertType: 'Email',
            frequency: 'Daily'
        });
    };

    return (
        <div>
            <h1>Alerts & Scheduling</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="patientId">Patient ID:</label>
                    <input
                        id="patientId"
                        name="patientId"
                        type="text"
                        value={formData.patientId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="condition">Condition:</label>
                    <input
                        id="condition"
                        name="condition"
                        type="text"
                        value={formData.condition}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="threshold">Threshold:</label>
                    <input
                        id="threshold"
                        name="threshold"
                        type="text"
                        value={formData.threshold}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="alertType">Alert Type:</label>
                    <select
                        id="alertType"
                        name="alertType"
                        value={formData.alertType}
                        onChange={handleChange}>
                        <option value="Email">Email</option>
                        <option value="SMS">SMS</option>
                        <option value="Phone Call">Phone Call</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="frequency">Frequency:</label>
                    <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Only Once">Only Once</option>
                    </select>
                </div>
                <button type="submit">Set Alert</button>
                {submissionSuccess && <p>Alert set up successfully!</p>}
            </form>
        </div>
    );
}

export default AlertsScheduling;
