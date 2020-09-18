/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { MigrationInterface, QueryRunner, getRepository } from 'typeorm';
// import Post from '../models/Post';

export class Seed1599369075574 implements MigrationInterface {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async up(queryRunner: QueryRunner): Promise<void> {
        // const post = getRepository(Post).create({
        //     title: 'rrr',
        //     author_id: 1,
        //     author_name: 'rrr',
        //     body: 'rrr',
        //     likes: ['1', '2', '4'],
        // });
        // await getRepository('post').save({
        //     title: 'rrr',
        //     author_id: 1,
        //     author_name: 'rrr',
        //     body: 'rrr',
        //     likes: ['1', '2', '4'],
        // });
        // for (let i = 0; i < 5; i += 1) {
        //     await queryRunner.query(
        //         `INSERT INTO post(title,author_id,author_name,body,likes) VALUES ('TEST',1,'TEST','test test test','["1","2","3"]')`,
        //     );
        //     await queryRunner.query(
        //         `INSERT INTO comment(author_id,body,likes,post_id) VALUES (1,'test test test','["1","2","3"]',1)`,
        //     );
        // }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async down(queryRunner: QueryRunner): Promise<void> {
        // await queryRunner.query(
        //     `DELETE FROM post WHERE title='TEST' AND author_id=1 AND author_name='TEST'AND body='test test test'`,
        // );
        // await queryRunner.query(`DELETE FROM comment WHERE author_id=1 AND body='test test test'`);
    }
}
