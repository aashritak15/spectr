import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='bg-gray-800 p-4'>

            <Link href = "/">
                <a className = "text-white text-2xl font-bold"> myLogo </a>
            </Link>

           {/* User Profile Button */}
           <Link href = "/profile">
                <a className = "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Profile</a>
        
           </Link>
        </nav>
    );
};

export default NavBar; 