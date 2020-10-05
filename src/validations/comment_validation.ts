import { body } from 'express-validator';
import validateData from '../middleware/is_valid';

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

const deleteCommentValidation = [
    body('id').isNumeric(),
    body('user_id').isNumeric(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
    validateData,
];

export { createCommentValidation, likeCommentValidation, deleteCommentValidation };
