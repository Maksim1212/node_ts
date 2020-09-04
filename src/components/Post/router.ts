import { Router } from 'express';
import { body } from 'express-validator';
import * as PostComponent from '.';
import Auth from '../../polices/isAuth';

const postRouter = Router();

postRouter.get('/', PostComponent.findAll);

postRouter.get('/:id', PostComponent.findById);

postRouter.get('/user/:id', PostComponent.findByUserId);

postRouter.post('/sort', [body('parametr').isString().isLength({ min: 3, max: 4 })], PostComponent.sort);

postRouter.post('/likes', [body('parametr').isString().isLength({ min: 3, max: 4 })], PostComponent.sortByLikes);

postRouter.post(
    '/create',
    [
        body('author_id').isNumeric(),
        body('author_name').isString().isLength({ min: 2, max: 35 }),
        body('title').isString().isLength({ min: 1, max: 100 }),
        body('body').isString().isLength({ min: 1, max: 10000 }),
        body('accessToken').isString().isLength({ min: 100, max: 200 }),
    ],
    Auth,
    PostComponent.create,
);

postRouter.put(
    '/update',
    [
        body('id').isNumeric(),
        body('author_id').isNumeric(),
        body('title').isString().isLength({ min: 1, max: 100 }),
        body('body').isString().isLength({ min: 1, max: 10000 }),
    ],
    PostComponent.updateById,
);

postRouter.put(
    '/like',
    [
        body('post_id').isNumeric(),
        body('user_id').isNumeric(),
        body('accessToken').isString().isLength({ min: 100, max: 200 }),
    ],
    Auth,
    PostComponent.addLike,
);

postRouter.delete(
    '/',
    [body('id').isNumeric(), body('accessToken').isString().isLength({ min: 100, max: 200 })],
    Auth,
    PostComponent.deleteById,
);

export default postRouter;
