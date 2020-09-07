import { Router } from 'express';
import * as PostComponent from '.';
import {
    sortPostValidation,
    sortByLikesValidation,
    createPostValidation,
    updatePostValidation,
    likePostValidation,
    deletePostValidation,
} from './validation';
import Auth from '../../polices/isAuth';

const postRouter = Router();

postRouter.get('/', PostComponent.findAll);

postRouter.get('/:id', PostComponent.findById);

postRouter.get('/user/:id', PostComponent.findByUserId);

postRouter.post('/sort', sortPostValidation, PostComponent.sort);

postRouter.post('/likes', sortByLikesValidation, PostComponent.sortByLikes);

postRouter.post('/create', createPostValidation, Auth, PostComponent.create);

postRouter.put('/update', updatePostValidation, PostComponent.updateById);

postRouter.put('/like', likePostValidation, Auth, PostComponent.addLike);

postRouter.delete('/', deletePostValidation, Auth, PostComponent.deleteById);

export default postRouter;
