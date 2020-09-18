import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export class CreateCommentSchema1600427061698 implements MigrationInterface {
    // eslint-disable-next-line class-methods-use-this
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comment',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'author_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'body',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'likes',
                        type: 'json',
                        default: null,
                    },
                    {
                        name: 'post_id',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'creation_time',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    // eslint-disable-next-line class-methods-use-this
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comment');
    }
}
