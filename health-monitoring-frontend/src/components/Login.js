import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Patient'); // Default to 'Patient'
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Attempting login with:', email, password, role);
        // Example POST method implementation for login:
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                // Redirect based on role
                switch (role) {
                    case 'Patient':
                        navigate('/dashboard');
                        break;
                    case 'Doctor':
                        navigate('/doctor');
                        break;
                    case 'Nurse':
                        navigate('/doctor');
                        break;
                    case 'Admin':
                        navigate('/admin');
                        break;
                    case 'Family Member':
                        navigate('/dashboard');
                        break;
                    default:
                        navigate('/'); // Default redirection if role doesn't match any case
                }
            } else {
                console.error('Login failed:', data.message);
                alert('Login failed!');
            }
        } catch (error) {
            console.error('Login failed with error:', error);
            alert('Login failed!');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Patient">Patient</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Admin">Admin</option>
                    <option value="Family Member">Family Member</option>
                </select>
                <button type="submit">Login</button>
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
            </form>
        </div>
    );
}

export default Login;
