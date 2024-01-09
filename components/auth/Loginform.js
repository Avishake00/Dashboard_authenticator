'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const Loginform = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    console.log(username);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Username (Email) Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(username)) {
        setError('Invalid email format');
        return;
      }
  
      // Password Validation
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
      if (!passwordRegex.test(password)) {
        setError('Invalid password format');
        return;
      }
  
      // Redirect to Dashboard on successful login
      if (password === 'SmartServTest@123') {
        router.push('/auth/dashboard');
      } else {
        setError('Incorrect password');
      }
    };
  
    return (
      <form className="w-10/12 flex flex-col items-center justify-center rounded-md" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <input
            type="text"
            id="username"
            name="username"
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-600 focus:border-2 placeholder-gray-700"
          />
        </div>
        <div className="mb-6 w-full">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border rounded focus:outline-none focus:border-blue-600 focus:border-2 placeholder-gray-700"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-400 text-white p-2 rounded hover:bg-green-600"
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    );
  };

export default Loginform