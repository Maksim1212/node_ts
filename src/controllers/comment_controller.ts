import { Request, Response } from 'express';

import LikesData from '../interfaces/likes_data_interface';
import * as CommentService from '../services/comment_service';
import isAdmin from '../middleware/is_admin';

export async function findAll(req: Request, res: Response): Promise<Response> {
    const comments = await CommentService.findAll();
    return res.status(200).json({ comments });
}

export async function create(req: Request, res: Response): Promise<Response> {
    await CommentService.create(req.body);
    return res.status(200).json({
        message: 'comment added successfully',
    });
}

export async function findByPostId(req: Request, res: Response): Promise<Response> {
    const comments = await CommentService.findByPostId(Number(req.query.id));
    return res.status(200).json({ comments });
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    const commentData = await CommentService.findOne(req.body.id);
    let like: string;
    const likes = [];
    if (commentData.likes) {
        like = commentData.likes.find((id) => id === `${req.body.user_id}`);
        likes.push(...commentData.likes);
    }
    if (!like) {
        likes.push(req.body.user_id);
        const likesData: LikesData = { likes };
        await CommentService.updateComment(req.body.id, likesData);
        const data = await CommentService.findOne(+req.body.id);
        return res.status(200).json({ data });
    }

    return res.status(422).json({
        message: 'you have already liked this post',
    });
}

export async function deleteById(req: Request, res: Response): Promise<Response> {
    const user = await isAdmin(req.body.user_id);
    const comment = await CommentService.findOne(Number(req.body.id));
    if (user || Number(comment.author_id) === req.body.user_id) {
        await CommentService.deleteById(+req.body.id);
        return res.status(200).json({
            message: 'comment deleted successfully',
        });
    }
    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}
