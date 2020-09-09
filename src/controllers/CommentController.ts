import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import Comment from '../models/Comment';
import { LikesData } from '../interfaces/LikesDataInterface';

export async function findAll(req: Request, res: Response): Promise<Response> {
    const comments = await getRepository(Comment).find();
    return res.status(200).json({ comments });
}

export async function create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const comment = getRepository(Comment).create(req.body);
    await getRepository(Comment).save(comment);
    return res.status(200).json({
        message: 'comment added successfully',
    });
}

export async function findByPostId(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const comments = await getRepository(Comment).findOneOrFail(req.params.id);
    return res.status(200).json({ comments });
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

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
