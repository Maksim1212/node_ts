import { ServiceConfigInterface, ConnectionConfigInterface } from '../interfaces/ConfigInterfaces';

export const serviceConfig: ServiceConfigInterface = {
    jwt: {
        refreshSecret: process.env.JWT_Refresh_Secret_KEY || 'vscode',
        accessSecret: process.env.JWT_Access_Secret_KEY || 'keyboard',
    },
};

export const connectionConfig: ConnectionConfigInterface = {
    host: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'blogAdmin',
    password: process.env.DB_PASS || 'blogadmin',
    database: process.env.DB_NAME || 'blog',
    port: 3306,
};

export const sessionSecret: string = process.env.SESSION_SECRET || 'keyboard cat';
