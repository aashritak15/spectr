"use client";

import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => { 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const loginProcess = () => {
        if (username && password) {
            localStorage.setItem('user', JSON.stringify({username, loggedIn: true}));
            router.push('/profile');
        }
    };


return (
    <div className = "flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-center"> Login </h2>
            <input
                type= "text"
                placeholder="Username"
                value= {username}
                onChange= {(e) => setUsername(e.target.value)}
                className= "w-full px-4 py-2 border rounded-md focus-outline-none focus:border-blue-500"
             />

             <input 
                type= "password"
                placeholder= "Password"
                value= {password}
                onChange= {(e) => setPassword(e.target.value)}
                className= "w-full px-4 py-2 border rounded-md focus-outline-none focus:border-blue-500"

             />
             <button onClick = {loginProcess} className = "w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Login
             </button>

        </div>

    </div>
);

}

export default Login; 
