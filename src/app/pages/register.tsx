"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '../services/api';

// Registration component for new users.
const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/auth/register', { email, password });
            router.push('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className = "flex items-center justify-center h-screen">
            <form onSubmit = {handleSubmit} className = "bg-white p-6 rounded shadow-md">
                <h2 className = "text-2xl font-bold mb-4">Register</h2>
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
                <button type = "submit" className = "bg-green-500 text-white py-2 px-4 rounded">Register</button>
                <p className = "mt-4">
                    Already have an account? <a href = "/login" className = "text-blue-500">Login</a>
                </p>
            </form>
        </div>
    );
};

export default Register;
