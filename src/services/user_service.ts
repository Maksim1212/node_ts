import { getRepository, UpdateResult } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

import { User } from '../entities/user';
import { UpdateData } from '../interfaces/user_model_interface';
import { OneUser, CreateUserData } from '../interfaces/user_service_interface';

function findByEmail(email: string): Promise<OneUser> {
    return getRepository(User).findOne({ where: { email } });
}

function createUser(data: CreateUserData): Promise<OneUser> {
    const newUser = getRepository(User).create(data);
    return getRepository(User).save(newUser);
}

function updateUser(id: number, password: QueryDeepPartialEntity<User>): Promise<UpdateResult> {
    return getRepository(User).update(id, password);
}

function fundOrFail(id: number): Promise<OneUser> {
    return getRepository(User).findOne(id);
}

function findByUserId(id: number): Promise<OneUser> {
    return getRepository(User).findOne(id);
}

function dropUserToken(id: number, data: UpdateData): Promise<UpdateResult> {
    return getRepository(User).update(id, data);
}

export { findByEmail, createUser, updateUser, findByUserId, dropUserToken, fundOrFail };
