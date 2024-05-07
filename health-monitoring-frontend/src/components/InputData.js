import React, { useState } from 'react';

function InputData() {
    const [formData, setFormData] = useState({
        patientId: '',
        weight: '',        // Weight in pounds (lbs)
        heightFeet: '',    // Height feet component
        heightInches: '',  // Height inches component
        bloodPressure: '',
        temperature: '',   // Temperature in Fahrenheit (°F)
        additionalNotes: ''
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
        console.log('Submitting health data:', formData);
        // Simulate API call success
        setSubmissionSuccess(true);
        setTimeout(() => setSubmissionSuccess(false), 5000);  // Display success message temporarily
        // Reset form after submission
        setFormData({
            patientId: '',
            weight: '',
            heightFeet: '',
            heightInches: '',
            bloodPressure: '',
            temperature: '',
            additionalNotes: ''
        });
    };

    return (
        <div>
            <h1>Input Health Data for Patients</h1>
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
                    <label htmlFor="weight">Weight (lbs):</label>
                    <input
                        id="weight"
                        name="weight"
                        type="number"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="heightFeet">Height (feet):</label>
                    <input
                        id="heightFeet"
                        name="heightFeet"
                        type="number"
                        value={formData.heightFeet}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="heightInches">Height (inches):</label>
                    <input
                        id="heightInches"
                        name="heightInches"
                        type="number"
                        value={formData.heightInches}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="bloodPressure">Blood Pressure (mmHg):</label>
                    <input
                        id="bloodPressure"
                        name="bloodPressure"
                        type="text"
                        value={formData.bloodPressure}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="temperature">Body Temperature (°F):</label>
                    <input
                        id="temperature"
                        name="temperature"
                        type="number"
                        step="0.1"
                        value={formData.temperature}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="additionalNotes">Additional Notes:</label>
                    <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit Data</button>
                {submissionSuccess && <p>Data submitted successfully!</p>}
            </form>
        </div>
    );
}

export default InputData;
