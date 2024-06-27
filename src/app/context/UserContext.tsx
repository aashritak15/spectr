import React, { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface UserContextType {
    user: any;
    login: (userData: any) => void;
    logout: () => void;
}


export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();


    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);


    const login = (userData: any) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        router.push('/profile');
    };


    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        router.push('/login');
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
