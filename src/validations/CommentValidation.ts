import { body } from 'express-validator';

const createCommentValidation = [
    body('author_id').isNumeric(),
    body('post_id').isNumeric(),
    body('body').isString().isLength({ min: 1, max: 1000 }),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
];
const likeCommentValidation = [
    body('id').isNumeric(),
    body('user_id').isNumeric(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
];

export { createCommentValidation, likeCommentValidation };
