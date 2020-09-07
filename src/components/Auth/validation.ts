import { body } from 'express-validator';

const loginValidation = [body('email').isEmail(), body('password').isLength({ min: 5, max: 45 })];
const logoutValidation = [body('user_id').isLength({ min: 1 })];
const createUserValidation = [body('email').isEmail(), body('password').isLength({ min: 5, max: 45 })];
const updateValidation = [
    body('email').isEmail(),
    body('password').isString().isLength({ min: 5, max: 45 }),
    body('newPassword').isString().isLength({ min: 5, max: 45 }),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
];

export { loginValidation, logoutValidation, createUserValidation, updateValidation };
