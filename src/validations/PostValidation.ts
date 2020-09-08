import { body } from 'express-validator';

const sortPostValidation = [body('parametr').isString().isLength({ min: 3, max: 4 })];
const sortByLikesValidation = [body('parametr').isString().isLength({ min: 3, max: 4 })];
const createPostValidation = [
    body('author_id').isNumeric(),
    body('author_name').isString().isLength({ min: 2, max: 35 }),
    body('title').isString().isLength({ min: 1, max: 100 }),
    body('body').isString().isLength({ min: 1, max: 10000 }),
    body('accessToken').isString().isLength({ min: 100, max: 200 }),
];
const updatePostValidation = [
    body('id').isNumeric(),
    body('author_id').isNumeric(),
    body('title').isString().isLength({ min: 1, max: 100 }),
    body('body').isString().isLength({ min: 1, max: 10000 }),
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
