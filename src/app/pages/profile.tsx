"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Profile = () => {
    const [user, setUser] = useState <{ username: string} | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            const userData = JSON.parse(storedUser);

            if(userData.loggedIn) {
                setUser(userData);

            }
            else {
                router.push('/login');
            }
        }
        else {
            router.push('/login');
        }
    }, []);


    const logoutProcess = () => {
        localStorage.removeItem('user');
        router.push('/login');
    };

    if(!user) return null; 

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className= "w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-center"> Profile Page </h2>
                <p> Welcome, {user.username} </p>

                <button onClick= {logoutProcess} className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Profile; 