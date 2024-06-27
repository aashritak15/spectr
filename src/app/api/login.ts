import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '../../services/userService';

// API route for handling login.
export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({ email: user.email });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}