"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1723498338353 = void 0;
class InitialMigration1723498338353 {
    constructor() {
        this.name = 'InitialMigration1723498338353';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`settings\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isNotificationEnabled\` tinyint NOT NULL, \`isNewDashboardEnabled\` tinyint NOT NULL, \`timezone\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`settings\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }
}
exports.InitialMigration1723498338353 = InitialMigration1723498338353;
//# sourceMappingURL=1723498338353-InitialMigration.js.map