"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("./auth/auth.routes");
const users_routes_1 = require("./users/users.routes");
const food_routes_1 = require("./food/food.routes");
const meal_routes_1 = require("./meal/meal.routes");
const router = express_1.default.Router();
new auth_routes_1.AuthRoutes(router);
new users_routes_1.UsersRoutes(router);
new food_routes_1.FoodRoutes(router);
new meal_routes_1.MealRoutes(router);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvYXBpLnJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUE4QjtBQUU5QixvREFBZ0Q7QUFDaEQsdURBQW1EO0FBQ25ELG9EQUFnRDtBQUNoRCxvREFBZ0Q7QUFFaEQsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVoQyxJQUFJLHdCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdkIsSUFBSSwwQkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLElBQUksd0JBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QixJQUFJLHdCQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFdkIsa0JBQWUsTUFBTSxDQUFDIn0=