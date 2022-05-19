"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_1 = require("../common/common.routes");
const food_controller_1 = __importDefault(require("./controllers/food.controller"));
const food_middleware_1 = require("./middleware/food.middleware");
const meal_middleware_1 = require("../meal/middleware/meal.middleware");
const users_middleware_1 = require("../users/middleware/users.middleware");
const jwt_middleware_1 = require("../auth/middleware/jwt.middleware");
const permission_middleware_1 = require("../common/middleware/permission.middleware");
const verifyBodyValidationErrors_middleware_1 = require("../common/middleware/verifyBodyValidationErrors.middleware");
class FoodRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(router) {
        super(router);
    }
    configureRoutes() {
        this.router
            .route(`/food`)
            .all(jwt_middleware_1.validJWTNeeded)
            .get(users_middleware_1.addUserIdIfNeeded, (0, express_validator_1.body)('userId').isString(), (0, express_validator_1.body)('start').isInt().optional(), (0, express_validator_1.body)('stop').isInt().optional(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, food_controller_1.default.listByUserId)
            .post(users_middleware_1.addUserIdIfNeeded, (0, express_validator_1.body)('quantity').isString().optional(), (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('calories').isInt(), (0, express_validator_1.body)('date').isInt(), (0, express_validator_1.body)('userId').isString(), (0, express_validator_1.body)('mealId').isString().optional(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, meal_middleware_1.validateMealExists, meal_middleware_1.validateMealOwner, food_middleware_1.validateMealLimit, food_controller_1.default.createFood);
        this.router
            .route(`/food/all`)
            .get(jwt_middleware_1.validJWTNeeded, (0, permission_middleware_1.permissionFlagRequired)(permission_middleware_1.PermissionFlag.ADMIN), (0, express_validator_1.body)('start').isInt().optional(), (0, express_validator_1.body)('stop').isInt().optional(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, food_controller_1.default.listAllFood);
        this.router
            .route(`/food/report`)
            .get(jwt_middleware_1.validJWTNeeded, (0, permission_middleware_1.permissionFlagRequired)(permission_middleware_1.PermissionFlag.ADMIN), food_controller_1.default.getFoodReport);
        this.router.param(`foodId`, food_middleware_1.extractFoodId);
        this.router
            .route(`/food/:foodId`)
            .all(jwt_middleware_1.validJWTNeeded, users_middleware_1.addUserIdIfNeeded, food_middleware_1.validateFoodExists, food_middleware_1.validateFoodOwnerOrAdmin)
            .get(food_controller_1.default.getFoodById)
            .put([
            (0, express_validator_1.body)('quantity').isString(),
            (0, express_validator_1.body)('name').isString(),
            (0, express_validator_1.body)('calories').isInt(),
            (0, express_validator_1.body)('date').isInt(),
            (0, express_validator_1.body)('mealId').isString(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            meal_middleware_1.validateMealExists,
            meal_middleware_1.validateMealOwner,
            food_middleware_1.validateMealLimit,
            food_controller_1.default.put,
        ])
            .patch([
            (0, express_validator_1.body)('quantity').isString().optional(),
            (0, express_validator_1.body)('name').isString().optional(),
            (0, express_validator_1.body)('calories').isInt().optional(),
            (0, express_validator_1.body)('date').isInt().optional(),
            (0, express_validator_1.body)('mealId').isString().optional(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            meal_middleware_1.validateMealExists,
            meal_middleware_1.validateMealOwner,
            food_middleware_1.validateMealLimit,
            food_controller_1.default.patch,
        ])
            .delete(food_controller_1.default.removeFood);
        return this.router;
    }
}
exports.FoodRoutes = FoodRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL2Zvb2QvZm9vZC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLDJEQUE2RDtBQUM3RCxvRkFBMkQ7QUFDM0Qsa0VBQThIO0FBQzlILHdFQUEyRjtBQUMzRiwyRUFBeUU7QUFDekUsc0VBQW1FO0FBQ25FLHNGQUFvRztBQUNwRyxzSEFBd0c7QUFFeEcsTUFBYSxVQUFXLFNBQVEsa0NBQWtCO0lBQzlDLFlBQVksTUFBc0I7UUFDOUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLE1BQU07YUFDTixLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2QsR0FBRyxDQUFDLCtCQUFjLENBQUM7YUFDbkIsR0FBRyxDQUNBLG9DQUFpQixFQUNqQixJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3pCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDaEMsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUMvQixrRUFBMEIsRUFDMUIseUJBQWMsQ0FBQyxZQUFZLENBQzlCO2FBQ0EsSUFBSSxDQUNELG9DQUFpQixFQUNqQixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3RDLElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUN4QixJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQ3BCLElBQUEsd0JBQUksRUFBQyxR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