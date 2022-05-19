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
exports.validateMealLimit = exports.extractFoodId = exports.validateFoodOwnerOrAdmin = exports.validateFoodExists = void 0;
const permission_middleware_1 = require("../../common/middleware/permission.middleware");
const food_service_1 = __importDefault(require("../services/food.service"));
function validateFoodExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const food = yield food_service_1.default.readById(req.params.foodId);
        if (food) {
            res.locals.food = food;
            return next();
        }
        return res.status(404).send({
            errors: [`Food ${req.params.foodId} not found`],
        });
    });
}
exports.validateFoodExists = validateFoodExists;
function validateFoodOwnerOrAdmin(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = res.locals.food) === null || _a === void 0 ? void 0 : _a.userId) !== res.locals.jwt.userId) {
            const isAdmin = res.locals.jwt.permissionFlags & permission_middleware_1.PermissionFlag.ADMIN;
            if (!isAdmin) {
                return res.status(400).send({
                    errors: ['User cannot change this food'],
                });
            }
        }
        return next();
    });
}
exports.validateFoodOwnerOrAdmin = validateFoodOwnerOrAdmin;
function extractFoodId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.id = req.params.foodId;
        return next();
    });
}
exports.extractFoodId = extractFoodId;
function validateMealLimit(req, res, next) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = res.locals.meal) === null || _a === void 0 ? void 0 : _a.limit) > 0) {
            const food = yield food_service_1.default.listByMealId(res.locals.meal._id);
            const foodInMealWithoutCurrent = ((_b = food === null || food === void 0 ? void 0 : food.filter) === null || _b === void 0 ? void 0 : _b.call(food, (_id) => _id !== req.body.id).length) || 0;
            if (foodInMealWithoutCurrent >= ((_c = res.locals.meal) === null || _c === void 0 ? void 0 : _c.limit)) {
                return res.status(400).send({
                    errors: ['Food cannot be added to Meal. Meal has reached food limit'],
                });
            }
        }
        return next();
    });
}
exports.validateMealLimit = validateMealLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9mb29kL21pZGRsZXdhcmUvZm9vZC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlGQUErRTtBQUUvRSw0RUFBbUQ7QUFFbkQsU0FBc0Isa0JBQWtCLENBQ3BDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztRQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLHNCQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0QsSUFBSSxJQUFJLEVBQUU7WUFDTixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdkIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sWUFBWSxDQUFDO1NBQ2xELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQTtBQWJELGdEQWFDO0FBRUQsU0FBc0Isd0JBQXdCLENBQzFDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOzs7UUFFMUIsSUFBSSxDQUFBLE1BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBDQUFFLE1BQU0sTUFBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDbkQsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLHNDQUFjLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsTUFBTSxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzNDLENBQUMsQ0FBQzthQUNOO1NBQ0o7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDOztDQUNqQjtBQWRELDREQWNDO0FBRUQsU0FBc0IsYUFBYSxDQUMvQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7UUFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQUE7QUFQRCxzQ0FPQztBQUVELFNBQXNCLGlCQUFpQixDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7O1FBRTFCLElBQUksQ0FBQSxNQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSwwQ0FBRSxLQUFLLElBQUcsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakUsTUFBTSx3QkFBd0IsR0FBRyxDQUFBLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLE1BQU0scURBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxNQUFNLEtBQUksQ0FBQyxDQUFDO1lBQzFGLElBQUksd0JBQXdCLEtBQUksTUFBQSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksMENBQUUsS0FBSyxDQUFBLEVBQUU7Z0JBQ3BELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sRUFBRSxDQUFDLDJEQUEyRCxDQUFDO2lCQUN4RSxDQUFDLENBQUM7YUFDTjtTQUNKO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7Q0FDakI7QUFmRCw4Q0FlQyJ9