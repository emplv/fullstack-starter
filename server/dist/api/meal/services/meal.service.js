"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meal_dao_1 = __importDefault(require("../daos/meal.dao"));
class MealService {
    constructor() {
        this.create = (resource) => {
            return meal_dao_1.default.addMeal(resource);
        };
        this.deleteById = (id) => {
            return meal_dao_1.default.removeMealById(id);
        };
        this.list = (userId) => {
            return meal_dao_1.default.getMealByUserId(userId);
        };
        this.patchById = (id, resource) => {
            return meal_dao_1.default.updateMealById(id, resource);
        };
        this.putById = (id, resource) => {
            return meal_dao_1.default.updateMealById(id, resource);
        };
        this.readById = (id) => {
            return meal_dao_1.default.getMealById(id);
        };
    }
}
exports.default = new MealService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tZWFsL3NlcnZpY2VzL21lYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdFQUF1QztBQUV2QyxNQUFNLFdBQVc7SUFBakI7UUFDSSxXQUFNLEdBQThCLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0MsT0FBTyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUE7UUFFRCxlQUFVLEdBQXFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEQsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQXNDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakQsT0FBTyxrQkFBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUE7UUFFRCxjQUFTLEdBQXFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzNELE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQTtRQUVELFlBQU8sR0FBcUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDekQsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFBO1FBRUQsYUFBUSxHQUFrQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzdDLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztDQUFBO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9