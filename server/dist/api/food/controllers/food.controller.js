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
const food_service_1 = __importDefault(require("../services/food.service"));
class FoodController {
    createFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const foodId = yield food_service_1.default.create(req.body);
            return res.status(201).send({ id: foodId });
        });
    }
    removeFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield food_service_1.default.deleteById(req.body.id);
            return res.status(204).send();
        });
    }
    listAllFood(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { start, stop } = req.body;
            const food = yield food_service_1.default.list(100, 0, start, stop);
            return res.status(200).send(food);
        });
    }
    listByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, start, stop } = req.body;
            const food = yield food_service_1.default.listByUserId(userId, start, stop);
            return res.status(200).send(food);
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield food_service_1.default.patchById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield food_service_1.default.putById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    getFoodById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_service_1.default.readById(req.body.id);
            return res.status(200).send(food);
        });
    }
    getFoodReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const food = yield food_service_1.default.getFoodReport();
            return res.status(200).send(food);
        });
    }
}
exports.default = new FoodController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9mb29kL2NvbnRyb2xsZXJzL2Zvb2QuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLDRFQUFtRDtBQUVuRCxNQUFNLGNBQWM7SUFDVixVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLHNCQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN6RCxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDakMsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxNQUFNLHNCQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2pELE1BQU0sc0JBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzNELE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUMvQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9