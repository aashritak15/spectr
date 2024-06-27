import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import { createUser } from '../services/userService';

// API route for handling registration.
export default async function register(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await createUser({ email, password: hashedPassword });
        res.status(201).json({ message: 'User created' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
}
