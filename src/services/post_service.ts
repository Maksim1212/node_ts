import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import Post from '../entities/post';
import Likes from '../interfaces/likes_data_interface';
import { GetAllPosts, OnePost, PostData } from '../interfaces/post_service_interface';

export function findAll(): Promise<GetAllPosts> {
    return getRepository(Post).find();
}

export function cretePost(postData: PostData[]): Promise<OnePost[]> {
    const post = getRepository(Post).create(postData);
    return getRepository(Post).save(post);
}

export function findByPostId(id: number): Promise<OnePost> {
    return getRepository(Post).findOne(id);
}

export function findByUserId(id: number): Promise<OnePost[]> {
    return getRepository(Post).find({ author_id: id });
}

export function updatePostById(id: number, body: Likes): Promise<UpdateResult> {
    return getRepository(Post).update(id, body);
}

export function deletePost(id: number): Promise<DeleteResult> {
    return getRepository(Post).delete(id);
}

export function findOrfail(id: number): Promise<OnePost> {
    return getRepository(Post).findOneOrFail(id);
}

export function sortByDate(sortingParametr): Promise<GetAllPosts> {
    return getRepository(Post).createQueryBuilder('post').orderBy('creation_time', sortingParametr).getMany();
}

export function sortByLikes(sortingParametr): Promise<GetAllPosts> {
    return getRepository(Post).createQueryBuilder('post').orderBy('likes', sortingParametr).getMany();
}
