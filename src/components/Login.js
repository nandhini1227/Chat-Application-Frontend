// frontend/src/components/Login.js
import React, { useState } from 'react';
import Axios from 'axios';

const Login = ({ setToken, setUsername }) => {
    const [username, setUsernameInput] = useState('');
    const [password, setPasswordInput] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:5000/api/auth/login', {
                username,
                password,
            });
            setToken(response.data.token);
            setUsername(username);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPasswordInput(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
