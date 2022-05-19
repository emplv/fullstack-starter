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
const OneDay = 1000 * 60 * 60 * 24;
class FoodDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.foodSchema = new this.Schema({
            _id: String,
            quantity: String,
            name: String,
            calories: Number,
            date: Number,
            userId: String,
            mealId: String,
        }, { id: false });
        this.Food = mongoose_service_1.default.getMongoose().model('Food', this.foodSchema);
    }
    addFood(foodFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const foodId = (0, uuid_1.v4)();
            const food = new this.Food(Object.assign({ _id: foodId }, foodFields));
            yield food.save();
            return foodId;
        });
    }
    getFoodById(foodId) {
        return this.Food.findById(foodId).exec();
    }
    getFoodByUserId(userId, start, stop) {
        const selectOptions = start && stop ? { date: { $gte: start, $lte: stop } } : {};
        return this.Food.find(Object.assign({ userId }, selectOptions)).exec();
    }
    getFoodByMealId(mealId) {
        return this.Food.find({ mealId }).exec();
    }
    getAllFood(limit = 25, page = 0, start, stop) {
        const selectOptions = start && stop ? { date: { $gte: start, $lte: stop } } : {};
        return this.Food.find(selectOptions, null, { limit, skip: limit * page }).exec();
    }
    getFoodReport() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const endOfToday = new Date();
            endOfToday.setHours(23);
            endOfToday.setMinutes(59);
            endOfToday.setSeconds(59);
            endOfToday.setMilliseconds(999);
            const weekAgo = new Date(endOfToday.getTime() - OneDay * 7);
            const twoWeeksAgo = new Date(endOfToday.getTime() - OneDay * 14);
            const last7DaysFood = yield this.Food.find({ date: { $lte: endOfToday.getTime(), $gt: weekAgo } }).exec();
            const last7DaysBeforeFood = yield this.Food.find({ date: { $lte: weekAgo, $gt: twoWeeksAgo } }).exec();
            const currentCount = (last7DaysFood === null || last7DaysFood === void 0 ? void 0 : last7DaysFood.length) || 0;
            const beforeCount = (last7DaysBeforeFood === null || last7DaysBeforeFood === void 0 ? void 0 : last7DaysBeforeFood.length) || 0;
            return {
                currentCount,
                currentFood: last7DaysFood,
                beforeFood: last7DaysBeforeFood,
                beforeCount,
                difference: currentCount - beforeCount,
                averageCalories: Math.round(((_a = last7DaysFood === null || last7DaysFood === void 0 ? void 0 : last7DaysFood.reduce) === null || _a === void 0 ? void 0 : _a.call(last7DaysFood, (acc, { calories }) => acc + calories, 0)) / last7DaysFood.length || 0),
            };
        });
    }
    removeFoodById(foodId) {
        return this.Food.deleteOne({ _id: foodId }).exec();
    }
    updateFoodById(foodId, foodFields) {
        delete foodFields.userId;
        return this.Food.findByIdAndUpdate(foodId, { $set: foodFields }, { new: true }).exec();
    }
}
exports.default = new FoodDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2Zvb2QvZGFvcy9mb29kLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFvQztBQUVwQyw4RkFBcUU7QUFTckUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBRW5DLE1BQU0sT0FBTztJQUFiO1FBQ0ksV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsR0FBRyxFQUFFLE1BQU07WUFDWCxRQUFRLEVBQUUsTUFBTTtZQUNoQixJQUFJLEVBQUUsTUFBTTtZQUNaLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLElBQUksRUFBRSxNQUFNO1lBQ1osTUFBTSxFQUFFLE1BQU07WUFDZCxNQUFNLEVBQUUsTUFBTTtTQUNqQixFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbEIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUF1RXhFLENBQUM7SUFyRVMsT0FBTyxDQUFDLFVBQXlCOztZQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksaUJBQ3RCLEdBQUcsRUFBRSxNQUFNLElBQ1IsVUFBVSxFQUNmLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRCxXQUFXLENBQUMsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMs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