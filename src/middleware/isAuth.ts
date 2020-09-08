import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { User } from '../models/User';
import { getJWTTokens } from '../controllers/UserController';
import { Tokens } from '../interfaces/UserModelInterface';
import { serviceConfig } from '../config/config';

export default async function isAuthJWT(req: Request, res: Response, next: NextFunction): Promise<unknown> {
    let tokens: Tokens;
    let verify;
    try {
        const token = req.body.accessToken;
        verify = jwt.verify(token, serviceConfig.jwt.accessSecret);
    } catch (error) {
        if (error.message === 'jwt expired') {
            const decoded = [];
            decoded.push(...Object.values(jwt.decode(req.body.accessToken)));
            const userId: number = decoded[0];
            tokens = await getJWTTokens(userId);
            const user = await getRepository(User).findOne(userId);
            const { accessToken } = tokens;
            req.body.accessToken = accessToken;
            const token = req.body.accessToken;
            verify = jwt.verify(token, serviceConfig.jwt.accessSecret);
            if (!user) {
                return res.status(401).json({ message: 'user not found' });
            }
        } else {
            return res.status(403).json({ message: 'wrong token' });
        }
    }
    const currentTime = Math.floor(Date.now() / 1000);
    if (verify.exp > currentTime) {
        return next();
    }
    return res.status(200);
}
