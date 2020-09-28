import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Comment from '../models/Comment';
import { User } from '../models/User';
import { LikesData } from '../interfaces/LikesDataInterface';

export async function findAll(req: Request, res: Response): Promise<Response> {
    const comments = await getRepository(Comment).find();
    return res.status(200).json({ comments });
}

export async function create(req: Request, res: Response): Promise<Response> {
    const comment = getRepository(Comment).create(req.body);
    await getRepository(Comment).save(comment);
    return res.status(200).json({
        message: 'comment added successfully',
    });
}

export async function findByPostId(req: Request, res: Response): Promise<Response> {
    const comments = await getRepository(Comment).findOneOrFail(req.params.id);
    return res.status(200).json({ comments });
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    const commentData = await getRepository(Comment).findOneOrFail(req.body.id);
    let like: string;
    const likes = [];
    if (commentData.likes !== null) {
        like = commentData.likes.find((id) => id === `${req.body.user_id}`);
        likes.push(...commentData.likes);
    }
    if (like === undefined) {
        likes.push(req.body.user_id);
        const likesData: LikesData = { likes };
        await getRepository(Comment).update(req.body.id, likesData);
        const data = await getRepository(Comment).findOne(req.body.id);
        return res.status(200).json({ data });
    }

    return res.status(422).json({
        message: 'you have already liked this post',
    });
}

export async function deleteById(req: Request, res: Response): Promise<Response> {
    const user = await getRepository(User).findOne({ where: { id: req.body.user_id } });
    const comment = await getRepository(Comment).findOne(req.params.id);
    if (user.is_admin === true || Number(comment.author_id) === user.id) {
        await getRepository(Comment).delete(req.body.id);
        return res.status(200).json({
            message: 'comment deleted successfully',
        });
    }
    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}
