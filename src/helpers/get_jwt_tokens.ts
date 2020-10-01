import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import { serviceConfig } from '../config/config';
import { Tokens } from '../interfaces/user_model_interface';

export default async function getJWTTokens(user: number): Promise<Tokens> {
    const accessToken = jwt.sign({ user }, serviceConfig.jwt.accessSecret, { expiresIn: 86400 });
    const refreshToken = jwt.sign({ user }, serviceConfig.jwt.refreshSecret, { expiresIn: '15d' });
    const userRefreshToken = { refreshToken };
    await getRepository(User).update(user, userRefreshToken);
    return {
        accessToken,
        refreshToken,
    };
}
