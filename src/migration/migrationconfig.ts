import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    // migrationsTableName: 'post',
    migrations: ['src/migration/**/*{.ts,.js}'],
    entities: [
        '/src/components/Auth/**/*{.ts,.js}',
        '/src/components/Comment/**/*{.ts,.js}',
        '/src/components/Post/**/*{.ts,.js}',
    ],
    synchronize: true,
    cli: {
        migrationsDir: '/src/migration',
    },
};
export = connectionOptions;
