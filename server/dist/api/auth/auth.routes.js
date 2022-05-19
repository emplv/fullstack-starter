"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_1 = require("../common/common.routes");
const verifyBodyValidationErrors_middleware_1 = require("../common/middleware/verifyBodyValidationErrors.middleware");
const auth_controller_1 = __importDefault(require("./controllers/auth.controller"));
const jwt_middleware_1 = require("./middleware/jwt.middleware");
const auth_middleware_1 = require("./middleware/auth.middleware");
class AuthRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(router) {
        super(router);
    }
    configureRoutes() {
        this.router.post(`/auth`, [
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password').isString(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            auth_middleware_1.verifyUserPassword,
            auth_controller_1.default.generateToken,
        ]);
        this.router.post(`/auth/refresh-token`, [
            jwt_middleware_1.validJWTNeeded,
            jwt_middleware_1.validRefreshBodyNeeded,
            auth_controller_1.default.generateToken,
        ]);
        return this.router;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2F1dGgvYXV0aC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLDJEQUE2RDtBQUM3RCxzSEFBd0c7QUFDeEcsb0ZBQTJEO0FBQzNELGdFQUFxRjtBQUNyRixrRUFBa0U7QUFFbEUsTUFBYSxVQUFXLFNBQVEsa0NBQWtCO0lBQzlDLFlBQVksTUFBc0I7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUMzQixrRUFBMEI7WUFDMUIsb0NBQWtCO1lBQ2xCLHlCQUFjLENBQUMsYUFBYTtTQUMvQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNwQywrQkFBYztZQUNkLHVDQUFzQjtZQUN0Qix5QkFBYyxDQUFDLGFBQWE7U0FDL0IsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQXBCRCxnQ0FvQkMifQ==