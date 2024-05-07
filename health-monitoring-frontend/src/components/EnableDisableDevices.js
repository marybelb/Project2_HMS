import React, { useState, useEffect } from 'react';

function EnableDisableDevices() {
    // Simulated device data which would ideally come from an API call
    const [devices, setDevices] = useState([
        { id: 1, name: "Thermometer Inc", enabled: true },
        { id: 2, name: "Pulse Checkers Ltd", enabled: false },
        { id: 3, name: "BP Monitors Co", enabled: true },
        { id: 4, name: "GlucoMeters", enabled: false }
    ]);

    // Function to toggle device enabled status
    const toggleDeviceStatus = (deviceId) => {
        const updatedDevices = devices.map(device =>
            device.id === deviceId ? { ...device, enabled: !device.enabled } : device
        );
        setDevices(updatedDevices);
        // API call to update the status in the backend
        console.log(`API Call to update status for device ${deviceId}`);
    };

    return (
        <div>
            <h1>Enable or Disable Devices</h1>
            <table>
                <thead>
                    <tr>
                        <th>Device Name</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map(device => (
                        <tr key={device.id}>
                            <td>{device.name}</td>
                            <td>{device.enabled ? 'Enabled' : 'Disabled'}</td>
                            <td>
                                <button onClick={() => toggleDeviceStatus(device.id)}>
                                    {device.enabled ? 'Disable' : 'Enable'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EnableDisableDevices;
