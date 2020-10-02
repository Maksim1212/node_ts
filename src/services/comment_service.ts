import { getRepository } from 'typeorm';

import Comment from '../entities/comment';
import { AllComments, OneComment } from '../interfaces/comment_service_interfaces';

export function findAll(): Promise<AllComments> {
    return getRepository(Comment).find();
}

export function create(data): Promise<AllComments> {
    const comment = getRepository(Comment).create(data);
    return getRepository(Comment).save(comment);
}

export function findByPostId(id: number): Promise<OneComment> {
    return getRepository(Comment).findOneOrFail(id);
}

export function updateComment(id: number, likesData): Promise<any> {
    return getRepository(Comment).update(id, likesData);
}

export function findOne(id: number): Promise<OneComment> {
    return getRepository(Comment).findOne(id);
}

export function deleteById(id: number): Promise<any> {
    return getRepository(Comment).delete(id);
}
