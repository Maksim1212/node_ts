import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as PostComponent from '../controllers/post_controller';
import {
    sortPostValidation,
    sortByLikesValidation,
    createPostValidation,
    updatePostValidation,
    likePostValidation,
    deletePostValidation,
} from '../validations/post_validation';
import Auth from '../middleware/is_auth';

const postRouter = Router();

postRouter.get('/', asyncHandler(PostComponent.findAll));

postRouter.get('/:id', asyncHandler(PostComponent.findById));

postRouter.get('/user/:id', asyncHandler(PostComponent.findByUserId));

postRouter.post('/sort', sortPostValidation, asyncHandler(PostComponent.sort));

postRouter.post('/likes', sortByLikesValidation, asyncHandler(PostComponent.sortByLikes));

postRouter.post('/create', createPostValidation, Auth, asyncHandler(PostComponent.create));

postRouter.put('/update', updatePostValidation, asyncHandler(PostComponent.updateById));

postRouter.put('/like', likePostValidation, Auth, asyncHandler(PostComponent.addLike));

postRouter.delete('/', deletePostValidation, Auth, asyncHandler(PostComponent.deleteById));

export default postRouter;
