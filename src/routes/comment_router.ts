import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as CommentComponent from '../controllers/comment_controller';
import Auth from '../middleware/is_auth';
import {
    createCommentValidation,
    likeCommentValidation,
    deleteCommentValidation,
} from '../validations/comment_validation';

const commentRouter = Router();

commentRouter.get('/', asyncHandler(CommentComponent.findAll));

commentRouter.get('/:id', asyncHandler(CommentComponent.findByPostId));

commentRouter.post('/create', createCommentValidation, Auth, asyncHandler(CommentComponent.create));

commentRouter.put('/like', likeCommentValidation, Auth, asyncHandler(CommentComponent.addLike));

commentRouter.delete('/', deleteCommentValidation, Auth, asyncHandler(CommentComponent.deleteById));

export default commentRouter;
