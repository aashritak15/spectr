"use client";

import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useRouter } from 'next/router';

// Profile component to display user information.
const Profile: React.FC = () => {
    const { user } = useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <div className = "flex items-center justify-center h-screen">
            <div className = "bg-white p-6 rounded shadow-md">
                <h2 className = "text-2xl font-bold mb-4">Profile</h2>
                <p>Email: {user.email}</p>
            </div>
        </div>
    );
};

export default Profile; 
