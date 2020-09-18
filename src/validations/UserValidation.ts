import { body } from 'express-validator';
import validateData from '../middleware/isValid';

const loginValidation = [
    body('email').isEmail().trim(),
    body('password').isLength({ min: 5, max: 45 }).trim(),
    validateData,
];

const logoutValidation = [body('user_id').isLength({ min: 1 }).trim(), validateData];

const createUserValidation = [
    body('email').isEmail().trim(),
    body('password').isLength({ min: 5, max: 45 }).trim(),
    validateData,
];

const updateValidation = [
    body('email').isEmail().trim(),
    body('password').isString().isLength({ min: 5, max: 45 }).trim(),
    body('newPassword').isString().isLength({ min: 5, max: 45 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];

export { loginValidation, logoutValidation, createUserValidation, updateValidation };
