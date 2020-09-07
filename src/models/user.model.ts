import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { UserMain } from '../interfaces/UserModelInterface';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar', unique: true })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar', default: null })
    refreshToken: string;
}

export function getUserMainFields(user: UserMain): UserMain {
    const { name, id } = user;
    return {
        id,
        name,
    };
}
