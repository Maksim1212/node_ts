import { ConnectionOptions } from 'typeorm';
import { connectionConfig } from '../config/config';
import Post from '../models/Post';

const entities = [Post];

const connectionOptions: ConnectionOptions = {
    type: 'mysql',
    host: connectionConfig.host,
    port: connectionConfig.port,
    username: connectionConfig.username,
    password: connectionConfig.password,
    database: connectionConfig.database,
    migrations: ['src/migration/**/*{.ts,.js}'],
    entities,
    synchronize: true,
    cli: {
        migrationsDir: '/src/migration',
    },
};
export = connectionOptions;
