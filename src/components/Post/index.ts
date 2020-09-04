import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validationResult } from 'express-validator';
import Post from './model';
import LikesData from '../interface';

export async function findAll(req: Request, res: Response): Promise<Response> {
    try {
        const posts = await getRepository(Post).find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({
            error: error.name,
            details: error.message,
        });
    }
}

export async function create(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const post = getRepository(Post).create(req.body);
        const results = await getRepository(Post).save(post);
        return res.json(results);
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function findById(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const post = await getRepository(Post).findOne(req.params.id);
        return res.status(200).json({ post });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function findByUserId(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const posts = await getRepository(Post).find({ author_id: Number(req.params.id) });
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function updateById(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        await getRepository(Post).update(req.body.id, req.body);
        return res.status(200).json({
            message: 'post updated successfully',
        });
    } catch (error) {
        return res.status(422).json({ error });
    }
}

export async function deleteById(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        await getRepository(Post).delete(req.body.id);
        return res.status(200).json({
            message: 'user deleted successfully',
        });
    } catch (error) {
        return res.status(442).json({ error });
    }
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const postData = await getRepository(Post).findOneOrFail(req.body.post_id);
        let like: string;
        const likes = [];
        if (postData.likes !== null) {
            like = postData.likes.find((id) => id === `${req.body.user_id}`);
            likes.push(...postData.likes);
        }
        if (like === undefined) {
            likes.push(req.body.user_id);
            const likesData: LikesData = { likes };
            await getRepository(Post).update(req.body.post_id, likesData);
            const data = await getRepository(Post).findOne(req.body.post_id);
            return res.status(200).json({ data });
        }

        return res.status(422).json({
            message: 'you have already liked this post',
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
}

export async function sort(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { parametr } = req.body;

        const posts = await getRepository(Post).createQueryBuilder('post').orderBy('creation_time', parametr).getMany();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(422).json({
            error: error.name,
            details: error.message,
        });
    }
}

export async function sortByLikes(req: Request, res: Response): Promise<Response> {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { parametr } = req.body;
        const posts = await getRepository(Post).createQueryBuilder('post').orderBy('likes', parametr).getMany();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(422).json({
            error: error.name,
            details: error.message,
        });
    }
}
