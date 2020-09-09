import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as CommentComponent from '../controllers/CommentController';
import Auth from '../middleware/isAuth';
import { createCommentValidation, likeCommentValidation } from '../validations/CommentValidation';

const commentRouter = Router();

commentRouter.get('/', asyncHandler(CommentComponent.findAll));

commentRouter.get('/:id', asyncHandler(CommentComponent.findByPostId));

commentRouter.post('/create', createCommentValidation, Auth, asyncHandler(CommentComponent.create));

commentRouter.put('/like', likeCommentValidation, Auth, asyncHandler(CommentComponent.addLike));

export default commentRouter;
