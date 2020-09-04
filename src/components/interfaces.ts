export interface LikesData {
    likes: string[];
}
export interface Tokens {
    accessToken: string;
    refreshToken: string;
}

export interface Password {
    password: string;
}

export interface User {
    id: number;
    name: string;
}

export interface UpdateData {
    refreshToken: string;
}

// interface Decoded {
//     [key: string]: number;
//     user: number;
//     iat: number;
//     exp: number;
// }
