"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const meal_service_1 = __importDefault(require("../services/meal.service"));
class MealController {
    createMeal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const mealId = yield meal_service_1.default.create(req.body);
            return res.status(201).send({ id: mealId });
        });
    }
    removeMeal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield meal_service_1.default.deleteById(req.body.id);
            return res.status(204).send();
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = res.locals.jwt.userId;
            const meal = yield meal_service_1.default.list(userId);
            return res.status(200).send(meal);
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield meal_service_1.default.patchById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield meal_service_1.default.putById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    getMealById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const meal = yield meal_service_1.default.readById(req.body.id);
            return res.status(200).send(meal);
        });
    }
}
exports.default = new MealController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tZWFsL2NvbnRyb2xsZXJzL21lYWwuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDRFQUFtRDtBQUVuRCxNQUFNLGNBQWM7SUFDVixVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLHNCQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNsRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7WUFDckMsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLHNCQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2pELE1BQU0sc0JBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=