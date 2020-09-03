import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import Comment from './model';
import LikesData from '../interface';

export async function findAll(req: Request, res: Response): Promise<Response> {
    try {
        const comments = await getRepository(Comment).find();
        return res.status(200).json({ comments });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function create(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const comment = getRepository(Comment).create(req.body);
        await getRepository(Comment).save(comment);
        return res.status(200).json({
            message: 'comment added successfully',
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function findByPostId(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const comments = await getRepository(Comment).findOneOrFail(req.params.id);
        return res.status(200).json({ comments });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    try {
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
    } catch (error) {
        return res.status(500).json({ message: error.name });
    }
}
