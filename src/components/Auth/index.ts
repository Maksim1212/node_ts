import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import User from './model';

const saltRounds = 10;
const userNotFound = 'This Email not found';
const wrongPassword = 'Wrong Password';

export async function createUser(req: Request, res: Response): Promise<Response> {
    try {
        console.log('ok');
        req.body.password = await bcrypt.hash(req.body.password, saltRounds);
        // const user = await AuthUserService.createUser(req.body);
        const newUser = await getRepository(User).create(req.body);
        const results = await getRepository(User).save(newUser);
        return res.json(results);
        // return res.status(200).json({
        //     user,
        // });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
}
export async function login(req: Request, res: Response): Promise<Response> {
    try {
        const user = await getRepository(User).findOne(req.body.email);
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
        // const token = await getJWTTokens(user.id);
        // const accessToken = token.accessToken;
        let data = {};
        data = {
            // ...getUserMainFields(user),
            // accessToken,
            user,
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
