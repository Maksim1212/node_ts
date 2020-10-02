import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import Comment from '../entities/comment';
import { AllComments, OneComment, CommentData } from '../interfaces/comment_service_interfaces';
import Likes from '../interfaces/likes_data_interface';

export function findAll(): Promise<AllComments> {
    return getRepository(Comment).find();
}

export function create(data: CommentData): Promise<OneComment> {
    const comment = getRepository(Comment).create(data);
    return getRepository(Comment).save(comment);
}

export function findByPostId(id: number): Promise<OneComment> {
    return getRepository(Comment).findOneOrFail(id);
}

export function updateComment(id: number, likesData: Likes): Promise<UpdateResult> {
    return getRepository(Comment).update(id, likesData);
}

export function findOne(id: number): Promise<OneComment> {
    return getRepository(Comment).findOne(id);
}

export function deleteById(id: number): Promise<DeleteResult> {
    return getRepository(Comment).delete(id);
}
