"use client";


import Link from 'next/link';
import React from 'react';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const NavBar: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();

    useEffect (() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser && JSON.parse(storedUser).loggedIn) {
            setLoggedIn(true);
        }

    }, []);

    return (
        <nav className='bg-gray-800 p-4 justify-between items-center'>

            <div> 
                <Link href = "/">
                    <span className = "text-white text-2xl font-bold"> Spectr </span>
                </Link>

            </div>

        
            <div className = "mr-20">

                {loggedIn ? ( 
                    <Link href="/">
                        <span className = "px-4 py-2 ml-4 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"> Profile </span>
                    </Link>
                    
                ) : (
                    <Link href="/login">
                        <span className="px-4 py-2 ml-4 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"> Login </span>
                    </Link>

                )}

            </div>
        
        </nav>
    );
};

export default NavBar; 