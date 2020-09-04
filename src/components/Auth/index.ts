import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import * as jwt from 'jsonwebtoken';
import User from './model';
import getUserMainFields from '../../helpers/user';
import { Tokens, Password, UpdateData } from '../interfaces';

const saltRounds = 10;
const userNotFound = 'This Email not found';
const wrongPassword = 'Wrong Password';

export async function getJWTTokens(user: number): Promise<Tokens> {
    const accessToken = jwt.sign({ user }, process.env.JWT_Access_Secret_KEY, { expiresIn: 1 });
    const refreshToken = jwt.sign({ user }, process.env.JWT_Refresh_Secret_KEY, { expiresIn: '15d' });
    const userRefreshToken = { refreshToken };
    await getRepository(User).update(user, userRefreshToken);
    return {
        accessToken,
        refreshToken,
    };
}

export async function createUser(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = getRepository(User).create(req.body);
        const results = await getRepository(User).save(newUser);
        return res.json(results);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function login(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await getRepository(User).findOne({ where: { email: req.body.email } });
        if (!user) {
            return res.status(401).json({
                message: userNotFound,
            });
        }

        const reqPassword = req.body.password;
        const userPassword = user.password;
        const passwordsMatch = await bcrypt.compare(reqPassword, userPassword);

        if (!passwordsMatch) {
            return res.status(401).json({
                message: wrongPassword,
            });
        }

        const token = await getJWTTokens(user.id);
        const { accessToken } = token;
        let data = {};
        data = {
            ...getUserMainFields(user),
            accessToken,
        };
        return res.status(200).json({
            data,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}

export async function updateUserPass(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const updatingUser = await getRepository(User).findOne({ where: { email: req.body.email } });

        if (!updatingUser) {
            return res.status(401).json({ message: 'wrong Email' });
        }

        const reqPassword = req.body.password;
        const userPassword = updatingUser.password;
        const passwordsMatch = await bcrypt.compare(reqPassword, userPassword);

        if (!passwordsMatch) {
            return res.status(401).json({ message: wrongPassword });
        }

        const newPassword: Password = {
            password: await bcrypt.hash(req.body.newPassword, saltRounds),
        };

        await getRepository(User).update(updatingUser.id, newPassword);

        return res.status(200).json({ message: 'your password has been successfully updated' });
    } catch (error) {
        return res.status(422).json({
            message: error.message,
        });
    }
}

export async function getUserFromID(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await getRepository(User).findOne(req.params.id);
        const { name } = user;
        return res.status(200).json({ name });
    } catch (error) {
        return res.status(500).json({
            message: error.name,
            details: error.message,
        });
    }
}

export async function logout(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const userData: UpdateData = { refreshToken: 'null' };
        const userId = req.body.user_id;
        await getRepository(User).update(userId, userData);
        return res.status(200).json({ message: 'you have successfully logged out' });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}
