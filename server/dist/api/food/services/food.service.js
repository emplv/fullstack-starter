"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const food_dao_1 = __importDefault(require("../daos/food.dao"));
class FoodService {
    constructor() {
        this.create = (resource) => {
            return food_dao_1.default.addFood(resource);
        };
        this.deleteById = (id) => {
            return food_dao_1.default.removeFoodById(id);
        };
        this.list = (limit, page, start, stop) => {
            return food_dao_1.default.getAllFood(limit, page, start, stop);
        };
        this.listByUserId = (userId, start, stop) => {
            return food_dao_1.default.getFoodByUserId(userId, start, stop);
        };
        this.listByMealId = (mealId) => {
            return food_dao_1.default.getFoodByMealId(mealId);
        };
        this.patchById = (id, resource) => {
            return food_dao_1.default.updateFoodById(id, resource);
        };
        this.putById = (id, resource) => {
            return food_dao_1.default.updateFoodById(id, resource);
        };
        this.readById = (id) => {
            return food_dao_1.default.getFoodById(id);
        };
        this.getFoodReport = () => {
            return food_dao_1.default.getFoodReport();
        };
    }
}
exports.default = new FoodService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9mb29kL3NlcnZpY2VzL2Zvb2Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGdFQUF1QztBQUV2QyxNQUFNLFdBQVc7SUFBakI7UUFDSSxXQUFNLEdBQThCLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0MsT0FBTyxrQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUE7UUFFRCxlQUFVLEdBQXFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEQsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUE7UUFFRCxTQUFJLEdBQWlDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDOUQsT0FBTyxrQkFBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUE7UUFFRCxpQkFBWSxHQUFzQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDdEUsT0FBTyxrQkFBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQTtRQUVELGlCQUFZLEdBQXNDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDekQsT0FBTyxrQkFBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUE7UUFFRCxjQUFTLEdBQXFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzNELE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQTtRQUVELFlBQU8sR0FBcUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDekQsT0FBTyxrQkFBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFBO1FBRUQsYUFBUSxHQUFrQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzdDLE9BQU8sa0JBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFBO1FBRUQsa0JBQWEsR0FBb0MsR0FBRyxFQUFFO1lBQ2xELE9BQU8sa0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUE7SUFDTCxDQUFDO0NBQUE7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=