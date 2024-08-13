"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Settings_1 = require("./entities/Settings");
exports.dataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'My-account',
    entities: [User_1.User, Settings_1.Settings],
    migrations: ["src/migrations/*.ts"],
    synchronize: false,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=orm.config.js.map