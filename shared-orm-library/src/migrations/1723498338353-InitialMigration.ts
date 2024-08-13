import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1723498338353 implements MigrationInterface {
    name = 'InitialMigration1723498338353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`settings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isNotificationEnabled\` tinyint NOT NULL, \`isNewDashboardEnabled\` tinyint NOT NULL, \`timezone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`settings\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
