import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as AuthUserComponent from '../controllers/user_controller';
import Auth from '../middleware/is_auth';
import {
    loginValidation,
    logoutValidation,
    createUserValidation,
    updateValidation,
} from '../validations/user_validation';

const authUserRouter = Router();

authUserRouter.post('/login', loginValidation, asyncHandler(AuthUserComponent.login));

authUserRouter.post('/logout', logoutValidation, asyncHandler(AuthUserComponent.logout));

authUserRouter.post('/createUser', createUserValidation, asyncHandler(AuthUserComponent.createUser));

authUserRouter.put('/update', updateValidation, Auth, asyncHandler(AuthUserComponent.updateUserPass));

authUserRouter.post('/updateToken', Auth);

authUserRouter.get('/user/:id', asyncHandler(AuthUserComponent.getUserFromID));

export default authUserRouter;
