import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as AuthUserComponent from '../controllers/UserController';
import Auth from '../middleware/isAuth';
import {
    loginValidation,
    logoutValidation,
    createUserValidation,
    updateValidation,
} from '../validations/UserValidation';

const authUserRouter = Router();

authUserRouter.post('/login', loginValidation, asyncHandler(AuthUserComponent.login));

authUserRouter.post('/logout', logoutValidation, asyncHandler(AuthUserComponent.logout));

authUserRouter.post('/createUser', createUserValidation, asyncHandler(AuthUserComponent.createUser));

authUserRouter.put('/update', updateValidation, Auth, asyncHandler(AuthUserComponent.updateUserPass));

authUserRouter.post('/updateToken', Auth);

authUserRouter.get('/user/:id', asyncHandler(AuthUserComponent.getUserFromID));

export default authUserRouter;
