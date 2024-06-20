import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='bg-gray-800 p-4 justify-between items-center'>

            <div> 
                <Link href = "/">
                    <span className = "text-white text-2xl font-bold"> myLogo </span>
                </Link>

            </div>

        
            <div className = "mr-20">

                <Link href = "/profile">
                        <span className = "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Profile</span>
                
                </Link>

            </div>
        
        </nav>
    );
};

export default NavBar; 