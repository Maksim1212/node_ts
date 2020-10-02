import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import Post from '../entities/post';
import Likes from '../interfaces/likes_data_interface';
import { GetAllPosts, OnePost, PostData } from '../interfaces/post_service_interface';

function findAll(): Promise<GetAllPosts> {
    return getRepository(Post).find();
}

function cretePost(postData: PostData[]): Promise<OnePost[]> {
    const post = getRepository(Post).create(postData);
    return getRepository(Post).save(post);
}

function findByPostId(id: number): Promise<OnePost> {
    return getRepository(Post).findOne(id);
}

function findByUserId(id: number): Promise<OnePost[]> {
    return getRepository(Post).find({ author_id: id });
}

function updatePostById(id: number, body: Likes): Promise<UpdateResult> {
    return getRepository(Post).update(id, body);
}

function deletePost(id: number): Promise<DeleteResult> {
    return getRepository(Post).delete(id);
}

function findOrfail(id: number): Promise<OnePost> {
    return getRepository(Post).findOneOrFail(id);
}

function sortByDate(sortingParametr: 'ASC' | 'DESC'): Promise<GetAllPosts> {
    return getRepository(Post).createQueryBuilder('post').orderBy('creation_time', sortingParametr).getMany();
}

function sortByLikes(sortingParametr: 'ASC' | 'DESC'): Promise<GetAllPosts> {
    return getRepository(Post).createQueryBuilder('post').orderBy('likes', sortingParametr).getMany();
}

export {
    findAll,
    cretePost,
    findByPostId,
    findByUserId,
    updatePostById,
    deletePost,
    findOrfail,
    sortByDate,
    sortByLikes,
};
