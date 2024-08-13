"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = exports.Settings = exports.User = void 0;
var User_1 = require("./entities/User");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var Settings_1 = require("./entities/Settings");
Object.defineProperty(exports, "Settings", { enumerable: true, get: function () { return Settings_1.Settings; } });
var orm_config_1 = require("./orm.config");
Object.defineProperty(exports, "dataSourceOptions", { enumerable: true, get: function () { return orm_config_1.dataSourceOptions; } });
//# sourceMappingURL=index.js.map