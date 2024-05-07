import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <button onClick={() => navigate('/add-user')}>Add User</button>
            <button onClick={() => navigate('/assign-roles')}>Assign/Change Roles</button>
            <button onClick={() => navigate('/manage-devices')}>Manage Device Makers</button>
            <button onClick={() => navigate('/enable-disable-devices')}>Enable/Disable Devices</button>
        </div>
    );
}

export default Admin;
