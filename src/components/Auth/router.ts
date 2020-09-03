import { Router } from 'express';
import { body } from 'express-validator';
import * as AuthUserComponent from '.';

// import Auth from '../../polices/isAuth';

const authUserRouter = Router();

authUserRouter.post('/login', AuthUserComponent.login);

// authUserRouter.get('/logout', logout);

authUserRouter.post(
    '/createUser',
    [body('email').isEmail(), body('password').isLength({ min: 5 })],
    AuthUserComponent.createUser,
);

// authUserRouter.post('/updateToken', Auth.isAuthJWT);

// authUserRouter.put('/update', Auth.isAuthJWT, AuthUserComponent.updateUserPass);

// authUserRouter.get('/user/:id', AuthUserComponent.getUserFromID);

export default authUserRouter;
