/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';

import postSeed from '../seeds/post_seed';
import userSeed from '../seeds/user_seed';
import commentSeed from '../seeds/comments_seed';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class dataSeeds1601367259385 implements MigrationInterface  {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async up(queryRunner: QueryRunner): Promise<void> {
        await getRepository('post').save(postSeed);
        await getRepository('user').save(userSeed);
        await getRepository('comment').save(commentSeed);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {
        // async down
    }
}
