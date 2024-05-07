import React, { useState } from 'react';

function ManageDevices() {
    const [devices, setDevices] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleEnableDisable = (deviceId) => {
        // Simulate toggling device enable/disable status
        setDevices(devices.map(device =>
            device.id === deviceId ? { ...device, enabled: !device.enabled } : device
        ));
        // API call would go here
    };

    return (
        <div>
            <h1>Manage Device Makers</h1>
            {devices.map(device => (
                <div key={device.id}>
                    {device.name}
                    <button onClick={() => handleEnableDisable(device.id)}>
                        {device.enabled ? 'Disable' : 'Enable'}
                    </button>
                </div>
            ))}
            {success && <p>Device status updated successfully!</p>}
        </div>
    );
}

export default ManageDevices;
