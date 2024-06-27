const users = new Map();

// Mock function to simulate fetching user by email.
export async function getUserByEmail(email: string) {
    return users.get(email);
}

// Mock function to simulate creating a new user.
export async function createUser(user: { email: string, password: string }) {
    users.set(user.email, user);
}
