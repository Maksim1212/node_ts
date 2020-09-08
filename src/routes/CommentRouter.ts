import { Router } from 'express';
import * as CommentComponent from '../controllers/CommentController';
import Auth from '../middleware/isAuth';
import { createCommentValidation, likeCommentValidation } from '../validations/CommentValidation';

const commentRouter = Router();

commentRouter.get('/', CommentComponent.findAll);

commentRouter.get('/:id', CommentComponent.findByPostId);

commentRouter.post('/create', createCommentValidation, Auth, CommentComponent.create);

commentRouter.put('/like', likeCommentValidation, Auth, CommentComponent.addLike);

export default commentRouter;
