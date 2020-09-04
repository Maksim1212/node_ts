import { Router } from 'express';
import { body } from 'express-validator';
import * as AuthUserComponent from '.';
import Auth from '../../polices/isAuth';

const authUserRouter = Router();

authUserRouter.post(
    '/login',
    [body('email').isEmail(), body('password').isLength({ min: 5, max: 45 })],
    AuthUserComponent.login,
);

authUserRouter.post('/logout', [body('user_id').isLength({ min: 1 })], AuthUserComponent.logout);

authUserRouter.post(
    '/createUser',
    [body('email').isEmail(), body('password').isLength({ min: 5, max: 45 })],
    AuthUserComponent.createUser,
);

authUserRouter.put(
    '/update',
    [
        body('email').isEmail(),
        body('password').isString().isLength({ min: 5, max: 45 }),
        body('newPassword').isString().isLength({ min: 5, max: 45 }),
        body('accessToken').isString().isLength({ min: 100, max: 200 }),
    ],
    Auth,
    AuthUserComponent.updateUserPass,
);

authUserRouter.post('/updateToken', Auth);

authUserRouter.get('/user/:id', AuthUserComponent.getUserFromID);

export default authUserRouter;
