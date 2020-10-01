import { getRepository } from 'typeorm';

import { User } from '../entities/user';

export function findAll() {
    return getRepository(User).find();
}

export function findOne(id) {
    return getRepository(User).findOne({ where: { id } });
}
