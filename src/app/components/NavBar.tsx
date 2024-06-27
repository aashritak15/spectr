"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from "../context/UserContext";

const NavBar: React.FC = () => {

    const { user, logout } = useContext(UserContext);
    const router = useRouter();

    return (
        <nav className = "bg-gray-800 p-4 flex justify-between items-center">
            <div>
                <Link href = "/">
                    <span className = "text-white text-2xl font-bold cursor-pointer"> Spectr </span>
                </Link>
            </div>

            <div className = "mr-20">
                {user ? (
                    <>
                        <Link href = "/profile">
                            <span className = "px-4 py-2 ml-4 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"> Profile </span>
                        </Link>

                        <button onClick = {logout} className = "px-4 py-2 ml-4 text-sm font-semibold text-white bg-red-500 rounded-md hover:bg-red-600" > Logout </button>
                    
                    </>
                ) : (

                    <Link href = "/login">
                        <span className = "px-4 py-2 ml-4 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"> Login </span>
                    </Link>
                    
                )}
            </div>
        </nav>

    );

};

export default NavBar; 