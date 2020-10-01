export interface ServiceConfigInterface {
    jwt: {
        refreshSecret: string;
        accessSecret: string;
    };
}
