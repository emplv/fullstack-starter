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
const uuid_1 = require("uuid");
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
class MealDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.mealSchema = new this.Schema({
            _id: String,
            name: String,
            limit: Number,
            userId: String,
        }, { id: false });
        this.Meal = mongoose_service_1.default.getMongoose().model('Meal', this.mealSchema);
    }
    addMeal(mealFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const mealId = (0, uuid_1.v4)();
            const meal = new this.Meal(Object.assign({ _id: mealId }, mealFields));
            yield meal.save();
            return mealId;
        });
    }
    getMealById(mealId) {
        return this.Meal.findById(mealId).exec();
    }
    getMealByUserId(userId) {
        return this.Meal.find({ userId }).exec();
    }
    removeMealById(mealId) {
        return this.Meal.deleteOne({ _id: mealId }).exec();
    }
    updateMealById(mealId, mealFields) {
        return __awaiter(this, void 0, void 0, function* () {
            delete mealFields.userId;
            return this.Meal.findByIdAndUpdate(mealId, { $set: mealFields }, { new: true }).exec();
        });
    }
}
exports.default = new MealDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21lYWwvZGFvcy9tZWFsLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFvQztBQUVwQyw4RkFBcUU7QUFRckUsTUFBTSxPQUFPO0lBQWI7UUFDSSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNqQixFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbEIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFnQ3hFLENBQUM7SUE5QlMsT0FBTyxDQUFDLFVBQXlCOztZQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksaUJBQ3RCLEdBQUcsRUFBRSxNQUFNLElBQ1IsVUFBVSxFQUNmLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxlQUFlLENBQUMsTUFBYztRQUMxQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsY0FBYyxDQUFDLE1BQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFSyxjQUFjLENBQUMsTUFBYyxFQUFFLFVBQXFDOztZQUN0RSxPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUM5QixNQUFNLEVBQ04sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ3BCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLE9BQU8sRUFBRSxDQUFDIn0=