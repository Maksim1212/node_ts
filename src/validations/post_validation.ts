import { body, query } from 'express-validator';
import validateData from '../middleware/is_valid';

const sortPostValidation = [body('parametr').isString().isLength({ min: 3, max: 4 }), validateData];
const sortByLikesValidation = [body('parametr').isString().isLength({ min: 3, max: 4 }), validateData];
const createPostValidation = [
    body('user_id').isNumeric(),
    body('author_name').isString().isLength({ min: 2, max: 35 }).trim(),
    body('title').isString().isLength({ min: 1, max: 100 }).trim(),
    body('body').isString().isLength({ min: 1, max: 10000 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];

const getOnePostValidation = [query('id').isNumeric().trim()];

const updatePostValidation = [
    body('id').isNumeric(),
    body('user_id').isNumeric(),
    body('title').isString().isLength({ min: 1, max: 100 }).trim(),
    body('body').isString().isLength({ min: 1, max: 10000 }).trim(),
    validateData,
];
const likePostValidation = [
    body('post_id').isNumeric(),
    body('user_id').isNumeric(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
    validateData,
];

const deletePostValidation = [
    body('id').isNumeric(),
    body('user_id').isNumeric(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
    validateData,
];

export {
    sortPostValidation,
    sortByLikesValidation,
    createPostValidation,
    updatePostValidation,
    likePostValidation,
    deletePostValidation,
    getOnePostValidation,
};
