import {MigrationInterface, QueryRunner} from "typeorm";

export class Loan1646779754159 implements MigrationInterface {
    name = 'Loan1646779754159'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`loan\` (\`id\` int NOT NULL AUTO_INCREMENT, \`day\` varchar(255) NOT NULL, \`reason\` varchar(255) NOT NULL, \`quantity\` int NOT NULL, \`interest\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`loan\``);
    }

}
