export interface ServiceConfigInterface {
    jwt: {
        refreshSecret: string;
        accessSecret: string;
    };
}

export interface ConnectionConfigInterface {
    host: string;
    username: string;
    password: string;
    database: string;
}
