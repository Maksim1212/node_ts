interface OneUser {
    id: number;
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    is_admin: boolean;
}

interface CreateUserData {
    name: string;
    email: string;
    password: string;
}

export { OneUser, CreateUserData };
