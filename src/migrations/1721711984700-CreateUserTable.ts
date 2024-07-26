import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1721711984700 implements MigrationInterface {
    name = 'CreateUserTable1721711984700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`regData\` datetime NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`regData\``);
    }

}
