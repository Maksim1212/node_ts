import { Router } from 'express';
import { body } from 'express-validator';
import * as CommentComponent from '.';

const commentRouter = Router();

commentRouter.get('/', CommentComponent.findAll);

commentRouter.get('/:id', CommentComponent.findByPostId);

commentRouter.post(
    '/create',
    [
        body('author_id').isNumeric(),
        body('post_id').isNumeric(),
        body('body').isString().isLength({ min: 1, max: 1000 }),
    ],
    CommentComponent.create,
);

commentRouter.put('/like', [body('id').isNumeric(), body('user_id').isNumeric()], CommentComponent.addLike);

export default commentRouter;
