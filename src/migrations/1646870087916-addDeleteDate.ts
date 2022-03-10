import {MigrationInterface, QueryRunner} from "typeorm";

export class addDeleteDate1646870087916 implements MigrationInterface {
    name = 'addDeleteDate1646870087916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loan\` ADD \`deleteAt\` datetime(6) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`loan\` DROP COLUMN \`deleteAt\``);
    }

}
