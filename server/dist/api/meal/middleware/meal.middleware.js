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
exports.extractMealId = exports.validateMealOwner = exports.validateMealExists = void 0;
const meal_service_1 = __importDefault(require("../services/meal.service"));
function validateMealExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const mealId = req.body.mealId || req.params.mealId;
        if (mealId) {
            const meal = yield meal_service_1.default.readById(mealId);
            if (meal) {
                res.locals.meal = meal;
                return next();
            }
            return res.status(404).send({
                errors: [`Food ${req.params.mealId} not found`],
            });
        }
        return next();
    });
}
exports.validateMealExists = validateMealExists;
function validateMealOwner(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!res.locals.meal || (((_a = res.locals.meal) === null || _a === void 0 ? void 0 : _a.userId) === res.locals.jwt.userId)) {
            return next();
        }
        return res.status(400).send({
            errors: ['User cannot change this meal'],
        });
    });
}
exports.validateMealOwner = validateMealOwner;
function extractMealId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.id = req.params.mealId;
        return next();
    });
}
exports.extractMealId = extractMealId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVhbC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9tZWFsL21pZGRsZXdhcmUvbWVhbC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDRFQUFtRDtBQUVuRCxTQUFzQixrQkFBa0IsQ0FDcEMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1FBRTFCLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BELElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxJQUFJLElBQUksRUFBRTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxFQUFFLENBQUM7YUFDakI7WUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUN4QixNQUFNLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFZLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQWpCRCxnREFpQkM7QUFFRCxTQUFzQixpQkFBaUIsQ0FDbkMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7OztRQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBLE1BQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBDQUFFLE1BQU0sTUFBSyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN6RSxPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUMzQyxDQUFDLENBQUM7O0NBQ047QUFYRCw4Q0FXQztBQUVELFNBQXNCLGFBQWEsQ0FDL0IsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1FBRTFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUFBO0FBUEQsc0NBT0MifQ==