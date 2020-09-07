import { Connection, createConnection } from 'typeorm';
import { User } from '../models/User';
import Post from '../models/Post';
import Comment from '../models/Comment';

export default async function createDbConnection(): Promise<Connection> {
    const entities = [User, Post, Comment];

    return createConnection({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities,
        synchronize: true,
    });
}
