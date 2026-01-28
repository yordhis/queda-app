interface User {
    id: string;
    name: string;
    email: string;
    address: string;
    role: 'client' | 'admin' | 'hotel_owner';
    roleId: string; // ID referencing the role details
    phone?: string;
    token_google?: string; // optional Google token for authentication
    createdAt: Date;
    updatedAt: Date;
};

interface UserRegistrationData {
    email: string;
    password: string;
    passwordConfirmation: string;
    roleId: string;
    token_google?: string; // optional Google token for authentication
}

export { User, UserRegistrationData };
