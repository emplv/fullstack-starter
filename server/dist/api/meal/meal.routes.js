"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_1 = require("../common/common.routes");
const meal_controller_1 = __importDefault(require("./controllers/meal.controller"));
const meal_middleware_1 = require("./middleware/meal.middleware");
const jwt_middleware_1 = require("../auth/middleware/jwt.middleware");
const verifyBodyValidationErrors_middleware_1 = require("../common/middleware/verifyBodyValidationErrors.middleware");
const users_middleware_1 = require("../users/middleware/users.middleware");
class MealRoutes extends common_routes_1.CommonRoutesConfig {
    constructor(router) {
        super(router);
    }
    configureRoutes() {
        this.router
            .route(`/meal`)
            .all(jwt_middleware_1.validJWTNeeded, users_middleware_1.addUserIdIfNeeded)
            .get((0, express_validator_1.body)('userId').isString(), (0, express_validator_1.body)('start').isInt().optional(), (0, express_validator_1.body)('stop').isInt().optional(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, meal_controller_1.default.list)
            .post((0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('limit').isInt().optional(), (0, express_validator_1.body)('userId').isString(), verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors, meal_controller_1.default.createMeal);
        this.router.param(`mealId`, meal_middleware_1.extractMealId);
        this.router
            .route(`/meal/:mealId`)
            .all(jwt_middleware_1.validJWTNeeded, users_middleware_1.addUserIdIfNeeded, meal_middleware_1.validateMealExists, meal_middleware_1.validateMealOwner)
            .get(meal_controller_1.default.getMealById)
            .put([
            (0, express_validator_1.body)('name').isString(),
            (0, express_validator_1.body)('limit').isInt(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            meal_controller_1.default.put,
        ])
            .patch([
            (0, express_validator_1.body)('name').isString().optional(),
            (0, express_validator_1.body)('limit').isInt().optional(),
            verifyBodyValidationErrors_middleware_1.verifyBodyValidationErrors,
            meal_middleware_1.validateMealExists,
            meal_middleware_1.validateMealOwner,
            meal_controller_1.default.patch,
        ])
            .delete(meal_controller_1.default.removeMeal);
        return this.router;
    }
}
exports.MealRoutes = MealRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXBpL21lYWwvbWVhbC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLDJEQUE2RDtBQUM3RCxvRkFBMkQ7QUFDM0Qsa0VBQW9HO0FBQ3BHLHNFQUFtRTtBQUNuRSxzSEFBd0c7QUFDeEcsMkVBQXlFO0FBR3pFLE1BQWEsVUFBVyxTQUFRLGtDQUFrQjtJQUM5QyxZQUFZLE1BQXNCO1FBQzlCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxNQUFNO2FBQ04sS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUNkLEdBQUcsQ0FDQSwrQkFBYyxFQUNkLG9DQUFpQixDQUNwQjthQUNBLEdBQUcsQ0FDQSxJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3pCLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDaEMsSUFBQSx3QkFBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUMvQixrRUFBMEIsRUFDMUIseUJBQWMsQ0FBQyxJQUFJLENBQ3RCO2FBQ0EsSUFBSSxDQUNELElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNoQyxJQUFBLHdCQUFJLEVBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3pCLGtFQUEwQixFQUMxQix5QkFBYyxDQUFDLFVBQVUsQ0FDNUIsQ0FBQztRQUVOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSwrQkFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU07YUFDTixLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3RCLEdBQUcsQ0FDQSwrQkFBYyxFQUNkLG9DQUFpQixFQUNqQixvQ0FBa0IsRUFDbEIsbUNBQWlCLENBQ3BCO2FBQ0EsR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDO2FBQy9CLEdBQUcsQ0FBQztZQUNELElBQUEsd0JBQUksRUFBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsSUFBQSx3QkFBSSxFQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRTtZQUNyQixrRUFBMEI7WUFDMUIseUJBQWMsQ0FBQyxHQUFHO1NBQ3JCLENBQUM7YUFDRCxLQUFLLENBQUM7WUFDSCxJQUFBLHdCQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUEsd0JBQUksRUFBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDaEMsa0VBQTBCO1lBQzFCLG9DQUFrQjtZQUNsQixtQ0FBaUI7WUFDakIseUJBQWMsQ0FBQyxLQUFLO1NBQ3ZCLENBQUM7YUFDRCxNQUFNLENBQUMseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNKO0FBdkRELGdDQXVEQyJ9