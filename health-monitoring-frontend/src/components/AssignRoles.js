import React, { useState } from 'react';

function AssignRoles() {
    const [roleInfo, setRoleInfo] = useState({
        userId: '',
        roles: []
    });
    const [success, setSuccess] = useState(false);

    const handleCheckboxChange = (role) => {
        setRoleInfo(prev => ({
            ...prev,
            roles: prev.roles.includes(role) ?
                prev.roles.filter(r => r !== role) : [...prev.roles, role]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Assigning roles:', roleInfo);
        // Here would be an API call
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <div>
            <h1>Assign/Change Roles</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="userId"
                    value={roleInfo.userId}
                    onChange={e => setRoleInfo({ ...roleInfo, userId: e.target.value })}
                    placeholder="User ID"
                    required
                />
                <div>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange('Patient')} /> Patient</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange('Nurse')} /> Nurse</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange('Doctor')} /> Doctor</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange('Admin')} /> Admin</label>
                    <label><input type="checkbox" onChange={() => handleCheckboxChange('Family Member')} /> Family Member</label>
                </div>
                <button type="submit">Assign Roles</button>
                {success && <p>Roles updated successfully!</p>}
            </form>
        </div>
    );
}

export default AssignRoles;
