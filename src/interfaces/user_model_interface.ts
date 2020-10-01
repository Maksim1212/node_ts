export interface Password {
    password: string;
}

export interface UpdateData {
    refreshToken: string;
}

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface UserMain {
    id: number;
    name: string;
}
