"use client";

import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/router';
import { api } from '../services/api';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(UserContext);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/auth/login', { email, password });
            login(response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className = "flex items-center justify-center h-screen">
            <form onSubmit = {handleSubmit} className = "bg-white p-6 rounded shadow-md">
                <h2 className = "text-2xl font-bold mb-4">Login</h2>
                <input
                    type = "email"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    placeholder = "Email"
                    className = "border p-2 w-full mb-4"
                />
                <input
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    placeholder = "Password"
                    className = "border p-2 w-full mb-4"
                />
                <button type = "submit" className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
                <p className = "mt-4">
                    Don't have an account? <a href = "/register" className = "text-blue-500">Register</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
