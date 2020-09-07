import { Router } from 'express';
import * as CommentComponent from '.';
import Auth from '../../polices/isAuth';
import { createCommentValidation, likeCommentValidation } from './validation';

const commentRouter = Router();

commentRouter.get('/', CommentComponent.findAll);

commentRouter.get('/:id', CommentComponent.findByPostId);

commentRouter.post('/create', createCommentValidation, Auth, CommentComponent.create);

commentRouter.put('/like', likeCommentValidation, Auth, CommentComponent.addLike);

export default commentRouter;
