import { Router } from 'express';
import * as AuthUserComponent from '../controllers/UserController';
import Auth from '../middleware/isAuth';
import {
    loginValidation,
    logoutValidation,
    createUserValidation,
    updateValidation,
} from '../validations/UserValidation';

const authUserRouter = Router();

authUserRouter.post('/login', loginValidation, AuthUserComponent.login);

authUserRouter.post('/logout', logoutValidation, AuthUserComponent.logout);

authUserRouter.post('/createUser', createUserValidation, AuthUserComponent.createUser);

authUserRouter.put('/update', updateValidation, Auth, AuthUserComponent.updateUserPass);

authUserRouter.post('/updateToken', Auth);

authUserRouter.get('/user/:id', AuthUserComponent.getUserFromID);

export default authUserRouter;
