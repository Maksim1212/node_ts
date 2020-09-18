import { body } from 'express-validator';
import validateData from '../middleware/isValid';

const createCommentValidation = [
    body('author_id').isNumeric().trim(),
    body('post_id').isNumeric().trim(),
    body('body').isString().isLength({ min: 1, max: 1000 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];
const likeCommentValidation = [
    body('id').isNumeric().trim(),
    body('user_id').isNumeric().trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];

export { createCommentValidation, likeCommentValidation };
