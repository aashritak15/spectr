import { useState } from 'react';
import { useRouter } from 'next/router';

const Profile = () => {
    const [user, setUser] = useState <{ username: string} | null>(null);
    const router = useRouter();

    useEffect( () => {
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

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            
        </div>
    )
}