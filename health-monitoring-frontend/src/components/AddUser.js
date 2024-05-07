import React, { useState } from 'react';

function AddUser() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: ''
    });
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Adding user:', userInfo);
        // Here would be an API call
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <button type="submit">Add User</button>
                {success && <p>User added successfully!</p>}
            </form>
        </div>
    );
}

export default AddUser;
