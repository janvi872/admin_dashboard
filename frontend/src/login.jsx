// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate('/login');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3002/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        // If the login request was unsuccessful, handle the error
        const { message } = await response.json();
        setError(message);
        return;
      }

      // If the login request was successful, redirect to the dashboard
      history.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
