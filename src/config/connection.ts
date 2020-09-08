import { Connection, createConnection } from 'typeorm';
import { User } from '../models/User';
import Post from '../models/Post';
import Comment from '../models/Comment';
import { connectionConfig } from './config';

export default async function createDbConnection(): Promise<Connection> {
    const entities = [User, Post, Comment];

    return createConnection({
        type: 'mysql',
        host: connectionConfig.host,
        port: connectionConfig.port,
        username: connectionConfig.username,
        password: connectionConfig.password,
        database: connectionConfig.database,
        entities,
        synchronize: true,
    });
}
