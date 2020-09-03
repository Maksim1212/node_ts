import { Router } from 'express';
import { body } from 'express-validator';
import * as PostComponent from '.';

const postRouter = Router();

postRouter.get('/', PostComponent.findAll);

postRouter.get('/:id', PostComponent.findById);

postRouter.get('/user/:id', PostComponent.findByUserId);

postRouter.post(
    '/create',
    [
        body('author_id').isNumeric(),
        body('author_name').isString().isLength({ min: 2, max: 35 }),
        body('title').isString().isLength({ min: 1, max: 100 }),
        body('body').isString().isLength({ min: 1, max: 10000 }),
    ],
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

postRouter.put('/like', [body('post_id').isNumeric(), body('user_id').isNumeric()], PostComponent.addLike);

postRouter.delete('/', [body('id').isNumeric()], PostComponent.deleteById);

export default postRouter;
