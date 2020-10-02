import { getRepository } from 'typeorm';

import { User } from '../entities/user';

export function findAll(): Promise<any> {
    return getRepository(User).find();
}

export function findOne(id: number): Promise<any> {
    return getRepository(User).findOne(id);
}

export function findByEmail(email: string): Promise<any> {
    return getRepository(User).findOne({ where: { email } });
}

export function createUser(data): Promise<any> {
    const newUser = getRepository(User).create(data);
    return getRepository(User).save(newUser);
}

export function updateUser(id: number, password): Promise<any> {
    return getRepository(User).update(id, password);
}

export function findByUserId(id: number): Promise<any> {
    return getRepository(User).findOne(id);
}

export function dropUserToken(id: number, data): Promise<any> {
    return getRepository(User).update(id, data);
}
