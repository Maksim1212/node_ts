import { getRepository } from 'typeorm';

import Post from '../entities/post';

export function findAll(): Promise<any> {
    return getRepository(Post).find();
}

export function cretePost(postData): Promise<any> {
    const post = getRepository(Post).create(postData);
    return getRepository(Post).save(post);
}

export function findByPostId(id): Promise<any> {
    return getRepository(Post).findOne(id);
}

export function findByUserId(id): Promise<any> {
    return getRepository(Post).find({ author_id: id });
}

export function updatePostById(id, body): Promise<any> {
    return getRepository(Post).update(id, body);
}

export function deletePost(id): Promise<any> {
    return getRepository(Post).delete(id);
}

export function findOrfail(id): Promise<any> {
    return getRepository(Post).findOneOrFail(id);
}

export function sortByDate(sortingParametr): Promise<any> {
    return getRepository(Post).createQueryBuilder('post').orderBy('creation_time', sortingParametr).getMany();
}

export function sortByLikes(sortingParametr): Promise<any> {
    return getRepository(Post).createQueryBuilder('post').orderBy('likes', sortingParametr).getMany();
}
