interface User {
    id: string;
    email: string;
    role: string; // e.g., 'admin', 'user', etc.
    roleId: string; // ID referencing the role details
};

interface UserRegistrationData {
    email: string;
    password: string;
    passwordConfirmation: string;
    roleId: string;
    google_id?: string; // optional Google token for authentication
}



export { User, UserRegistrationData };

