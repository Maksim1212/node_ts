export interface Password {
    password: string;
}

export interface UpdateData {
    refreshToken: string;
}

export interface TokensInterface {
    accessToken: string;
    refreshToken: string;
}

export interface UserMainInterface {
    id: number;
    name: string;
}
