import { Request, Response } from 'express';

import LikesData from '../interfaces/likes_data_interface';
import * as PostService from '../services/post_service';
import * as UserService from '../services/user_service';
import isAdmin from '../middleware/is_admin';
import { getUserMainFields } from '../entities/user';
import { PostData } from '../interfaces/post_service_interface';

export async function findAll(req: Request, res: Response): Promise<Response> {
    const posts = await PostService.findAll();
    return res.status(200).json(posts);
}

export async function create(req: Request, res: Response): Promise<Response> {
    const user = await UserService.findByUserId(Number(req.body.user_id));

    const userMain = {
        ...getUserMainFields(user),
    };

    const postData: PostData[] = [
        {
            title: req.body.title,
            body: req.body.body,
            user_id: req.body.user_id,
            author_name: userMain.name,
            accessToken: req.body.accessToken,
        },
    ];

    const results = await PostService.cretePost(postData);

    return res.json(results);
}

export async function findById(req: Request, res: Response): Promise<Response> {
    const post = await PostService.findByPostId(Number(req.query.id));
    return res.status(200).json({ post });
}

export async function findByUserId(req: Request, res: Response): Promise<Response> {
    const posts = await PostService.findByUserId(Number(req.query.id));
    return res.status(200).json({ posts });
}

export async function updateById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.body.user_id);
    const post = await PostService.findOrfail(Number(req.body.id));

    if ((await isAdmin(id)) || post.user_id === req.body.user_id) {
        await PostService.updatePostById(req.body.id, req.body);
        return res.status(200).json({
            message: 'post updated successfully',
        });
    }
    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}

export async function deleteById(req: Request, res: Response): Promise<Response> {
    const id = Number(req.body.user_id);
    const post = await PostService.findByPostId(Number(req.params.id));

    if ((await isAdmin(id)) || post.user_id === req.body.user_id) {
        await PostService.deletePost(req.body.id);
        return res.status(200).json({
            message: 'post deleted successfully',
        });
    }

    return res.status(403).json({
        message: 'you are do not have permissions to perform this operation',
    });
}

export async function addLike(req: Request, res: Response): Promise<Response> {
    const postData = await PostService.findOrfail(req.body.post_id);
    let like: string;
    const likes = [];
    if (postData.likes) {
        like = postData.likes.find((id) => id === `${req.body.user_id}`);
        likes.push(...postData.likes);
    }
    if (!like) {
        likes.push(req.body.user_id);
        const likesData: LikesData = { likes };
        await PostService.updatePostById(req.body.post_id, likesData);
        const data = await PostService.findByPostId(req.body.post_id);
        return res.status(200).json({ data });
    }

    return res.status(422).json({
        message: 'you have already liked this post',
    });
}

export async function sort(req: Request, res: Response): Promise<Response> {
    const sortingParametr = req.body.parametr;
    const posts = await PostService.sortByDate(sortingParametr);
    return res.status(200).json(posts);
}

export async function sortByLikes(req: Request, res: Response): Promise<Response> {
    const { sortingParametr } = req.body;
    const posts = await PostService.sortByLikes(sortingParametr);
    return res.status(200).json(posts);
}
