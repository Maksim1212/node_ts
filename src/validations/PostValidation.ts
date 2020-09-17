import { body } from 'express-validator';
import validateData from '../middleware/isValid';

const sortPostValidation = [body('parametr').isString().isLength({ min: 3, max: 4 })];
const sortByLikesValidation = [body('parametr').isString().isLength({ min: 3, max: 4 })];
const createPostValidationData = [
    body('author_id').isNumeric(),
    body('author_name').isString().isLength({ min: 2, max: 35 }).trim(),
    body('title').isString().isLength({ min: 1, max: 100 }).trim(),
    body('body').isString().isLength({ min: 1, max: 10000 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
];
// const createPostValidation = validateData(createPostValidationData);
const createPostValidation = [
    body('author_id').isNumeric(),
    body('author_name').isString().isLength({ min: 2, max: 35 }).trim(),
    body('title').isString().isLength({ min: 1, max: 100 }).trim(),
    body('body').isString().isLength({ min: 1, max: 10000 }).trim(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }).trim(),
    validateData,
];

const updatePostValidation = [
    body('id').isNumeric(),
    body('author_id').isNumeric(),
    body('title').isString().isLength({ min: 1, max: 100 }).trim(),
    body('body').isString().isLength({ min: 1, max: 10000 }).trim(),
];
const likePostValidation = [
    body('post_id').isNumeric(),
    body('user_id').isNumeric(),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
];

const deletePostValidation = [body('id').isNumeric(), body('accessToken').isString().isLength({ min: 100, max: 200 })];

export {
    sortPostValidation,
    sortByLikesValidation,
    createPostValidation,
    updatePostValidation,
    likePostValidation,
    deletePostValidation,
};
