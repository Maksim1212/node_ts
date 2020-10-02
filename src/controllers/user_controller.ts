import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';

import getJWTTokens from '../helpers/get_jwt_tokens';
import { getUserMainFields } from '../entities/user';
import { UpdateData, Password } from '../interfaces/user_model_interface';
import * as UserService from '../services/user_service';

const saltRounds = 10;
const userNotFound = 'This Email not found';
const wrongPassword = 'Wrong Password';

export async function createUser(req: Request, res: Response): Promise<Response> {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    const results = await UserService.createUser(req.body);
    return res.json(results);
}

export async function login(req: Request, res: Response): Promise<Response> {
    const user = await UserService.findByEmail(req.body.email);
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
}

export async function updateUserPass(req: Request, res: Response): Promise<Response> {
    const updatingUser = await UserService.findByEmail(req.body.email);

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

    await UserService.updateUser(updatingUser.id, newPassword);

    return res.status(200).json({ message: 'your password has been successfully updated' });
}

export async function getUserFromID(req: Request, res: Response): Promise<Response> {
    const user = await UserService.findByUserId(Number(req.params.id));
    const { name } = user;
    return res.status(200).json({ name });
}

export async function logout(req: Request, res: Response): Promise<Response> {
    const userData: UpdateData = { refreshToken: 'null' };
    const userId = req.body.user_id;
    await UserService.dropUserToken(userId, userData);
    return res.status(200).json({ message: 'you have successfully logged out' });
}
