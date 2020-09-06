import { MigrationInterface, QueryRunner } from 'typeorm';

export class seed1599369075574 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO post(title,author_id,author_name,body) VALUES ('TEST',1,'TEST','test test test')`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `DELETE FROM post WHERE title='TEST' AND author_id=1 AND author_name='TEST'AND body='test test test'`,
        );
    }
}
