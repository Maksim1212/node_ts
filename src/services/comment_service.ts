import { DeleteResult, getRepository, UpdateResult } from 'typeorm';

import Comment from '../entities/comment';
import { AllComments, OneComment, CommentData } from '../interfaces/comment_service_interfaces';
import Likes from '../interfaces/likes_data_interface';

function findAll(): Promise<AllComments> {
    return getRepository(Comment).find();
}

function create(data: CommentData): Promise<OneComment> {
    const comment = getRepository(Comment).create(data);
    return getRepository(Comment).save(comment);
}

function findByPostId(id: number): Promise<OneComment> {
    return getRepository(Comment).findOneOrFail({ post_id: id });
}

function updateComment(id: number, likesData: Likes): Promise<UpdateResult> {
    return getRepository(Comment).update(id, likesData);
}

function findOne(id: number): Promise<OneComment> {
    return getRepository(Comment).findOneOrFail(id);
}

function deleteById(id: number): Promise<DeleteResult> {
    return getRepository(Comment).delete(id);
}
export { findAll, create, findByPostId, updateComment, findOne, deleteById };
