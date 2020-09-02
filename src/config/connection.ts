import { createConnection } from 'typeorm';
import User from '../components/Auth/model';

const entities = [User];

createConnection({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities,
    synchronize: true,
});
