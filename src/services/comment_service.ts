import { getRepository } from 'typeorm';

import Comment from '../entities/comment';

export interface Commentss {
    [index: number]: {
        id: number;
        author_id: number;
        body: string;
        likes: string[];
        post_id: number;
        creation_time: Date;
    };
}
export interface OneComment {
    id: number;
    author_id: number;
    body: string;
    likes: string[];
    post_id: number;
    creation_time: Date;
}

export function findAll(): Promise<Commentss> {
    return getRepository(Comment).find();
}

export function create(data) {
    const comment = getRepository(Comment).create(data);
    return getRepository(Comment).save(comment);
}

export function findByPostId(id: number): Promise<OneComment> {
    return getRepository(Comment).findOneOrFail(id);
}

export function updateComment(id: number, likesData) {
    return getRepository(Comment).update(id, likesData);
}

export function findOne(id: number): Promise<OneComment> {
    return getRepository(Comment).findOne(id);
}

export function deleteById(id: number) {
    return getRepository(Comment).delete(id);
}
