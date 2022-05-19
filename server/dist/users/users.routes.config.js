"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = __importDefault(require("./middleware/users.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get(users_controller_1.default.listUsers)
            .post(users_middleware_1.default.validateRequiredUserBodyFields, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param(`userId`, users_middleware_1.default.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(users_middleware_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put(`/users/:userId`, [
            users_middleware_1.default.validateRequiredUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch(`/users/:userId`, [
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy91c2Vycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLHlFQUFvRTtBQUNwRSxzRkFBNkQ7QUFDN0QscUZBQTREO0FBRTVELE1BQWEsV0FBWSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixHQUFHLENBQUMsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDOUIsSUFBSSxDQUNELDBCQUFlLENBQUMsOEJBQThCLEVBQzlDLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUM3QixDQUFDO1FBRU4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUFDLDBCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLDBCQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQywwQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXhDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzNCLDBCQUFlLENBQUMsOEJBQThCO1lBQzlDLDBCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRztTQUN0QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QiwwQkFBZSxDQUFDLGtCQUFrQjtZQUNsQywwQkFBZSxDQUFDLEtBQUs7U0FDeEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MifQ==