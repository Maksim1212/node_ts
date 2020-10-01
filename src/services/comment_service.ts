import { getRepository } from 'typeorm';

import Comment from '../entities/comment';

export function findAll() {
    return getRepository(Comment).find();
}

export function create(data) {
    const comment = getRepository(Comment).create(data);
    return getRepository(Comment).save(comment);
}

export function findByPostId(id) {
    return getRepository(Comment).findOneOrFail(id);
}

export function updateComment(id, likesData) {
    return getRepository(Comment).update(id, likesData);
}

export function findOne(id) {
    return getRepository(Comment).findOne(id);
}
