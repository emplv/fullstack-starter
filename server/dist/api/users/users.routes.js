"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_1 = require("../common/common.routes");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middleware_1 = require("./middleware/users.middleware");
const jwt_middleware_1 = require("../auth/middleware/jwt.middleware");
const permission_middleware_1 = require("../common/middleware/permission.middleware");
const verifyBodyValidationErrors_middleware_1 = require("../common/middleware/verifyBodyValidationErrors.middleware");
class UsersRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(router) {
        super(router);
    }
    configureRoutes() {
        this.router
            .route(`/users`)
            .all(jwt_middleware_1.validJWTNeeded, (0, permission_middleware_1.permissionFlagRequired)(permission_middleware_1.PermissionFlag.ADMIN))
            .get(users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password')
            .isString()
            .isLength({ min: 5 })
            .withMessage('Must include password (5+ characters)'), (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('caloriesLimit').isInt().optional(), (0, express_validator_1.body)('permissionFlags').isInt().optional(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, users_middleware_1.validateEmailIsFree, users_controller_1.default.createUser);
        // This route "/users/add-admin" is only to easy the DEMO admin creation - normally should be handled via migrations
        this.router
            .route('/users/add-admin')
            .get(users_controller_1.default.addAdmin);
        this.router.param(`userId`, users_middleware_1.extractUserId);
        this.router
            .route(`/users/:userId`)
            .all(jwt_middleware_1.validJWTNeeded, permission_middleware_1.selfOrAdmin, users_middleware_1.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .put([
            (0, permission_middleware_1.permissionFlagRequired)(permission_middleware_1.PermissionFlag.ADMIN),
            (0, express_validator_1.body)('email').isEmail(),
            (0, express_validator_1.body)('password')
                .isString()
                .isLength({ min: 5 })
                .withMessage('Must include password (5+ characters)'),
            (0, express_validator_1.body)('name').isString(),
            (0, express_validator_1.body)('caloriesLimit').isInt(),
            (0, express_validator_1.body)('permissionFlags').isInt(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            users_middleware_1.validateEmailIsFree,
            users_controller_1.default.put,
        ])
            .patch([
            (0, express_validator_1.body)('email').isEmail().optional(),
            (0, express_validator_1.body)('password')
                .isString()
                .isLength({ min: 5 })
                .withMessage('Password must be 5+ characters')
                .optional(),
            (0, express_validator_1.body)('name').isString().optional(),
            (0, express_validator_1.body)('caloriesLimit').isInt().optional(),
            (0, express_validator_1.body)('permissionFlags').isInt().optional(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            users_middleware_1.validatePatchEmail,
            users_middleware_1.onlyAdminCanChangePermissionFlags,
            users_controller_1.default.patch,
        ])
            .delete(users_controller_1.default.removeUser);
        return this.router;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FwaS91c2Vycy91c2Vycy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLDJEQUE2RDtBQUM3RCxzRkFBNkQ7QUFDN0Qsb0VBQThKO0FBQzlKLHNFQUFtRTtBQUNuRSxzRkFBaUg7QUFDakgsc0hBQXdHO0FBR3hHLE1BQWEsV0FBWSxTQUFRLGtDQUFrQjtJQUMvQyxZQUFZLE1BQXNCO1FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxNQUFNO2FBQ04sS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FDQSwrQkFBYyxFQUNkLElBQUEsOENBQXNCLEVBQ2xCLHNDQUFjLENBQUMsS0FBSyxDQUN2QixDQUNKO2FBQ0EsR0FBRyxDQUFDLDBCQUFlLENBQUMsU0FBUyxDQUFDO2FBQzlCLElBQUksQ0FDRCxJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7YUFDWCxRQUFRLEVBQUU7YUFDVixRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDcEIsV0FBVyxDQUFDLHVDQUF1QyxDQUFDLEVBQ3pELElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUN4QyxJQUFBLHdCQUFJLEVBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDMUMsa0VBQTBCLEVBQzFCLHNDQUFtQixFQUNuQiwwQkFBZSxDQUFDLFVBQVUsQ0FDN0IsQ0FBQztRQUVOLG9IQUFvSDtRQUNwSCxJQUFJLENBQUMsTUFBTTthQUNOLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUN6QixHQUFHLENBQUMsMEJBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsZ0NBQWEsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNO2FBQ04sS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQ3ZCLEdBQUcsQ0FDQSwrQkFBYyxFQUNkLG1DQUFXLEVBQ1gscUNBQWtCLENBQ3JCO2FBQ0EsR0FBRyxDQUFDLDBCQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2hDLEdBQUcsQ0FBQztZQUNELElBQUEsOENBQXNCLEVBQUMsc0NBQWMsQ0FBQyxLQUFLLENBQUM7WUFDNUMsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDO2lCQUNYLFFBQVEsRUFBRTtpQkFDVixRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7aUJBQ3BCLFdBQVcsQ0FBQyx1Q0FBdUMsQ0FBQztZQUN6RCxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDN0IsSUFBQSx3QkFBSSxFQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFO1lBQy9CLGtFQUEwQjtZQUMxQixzQ0FBbUI7WUFDbkIsMEJBQWUsQ0FBQyxHQUFHO1NBQ3RCLENBQUM7YUFDRCxLQUFLLENBQUM7WUFDSCxJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUM7aUJBQ1gsUUFBUSxFQUFFO2lCQUNWLFFBQVEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDcEIsV0FBVyxDQUFDLGdDQUFnQyxDQUFDO2lCQUM3QyxRQUFRLEVBQUU7WUFDZixJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDeEMsSUFBQSx3QkFBSSxFQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzFDLGtFQUEwQjtZQUMxQixxQ0FBa0I7WUFDbEIsb0RBQWlDO1lBQ2pDLDBCQUFlLENBQUMsS0FBSztTQUN4QixDQUFDO2FBQ0QsTUFBTSxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQTVFRCxrQ0E0RUMifQ==