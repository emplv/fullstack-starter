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
exports.extractUserId = exports.addUserIdIfNeeded = exports.validateUserExists = exports.validatePatchEmail = exports.onlyAdminCanChangePermissionFlags = exports.validateEmailIsFree = void 0;
const permission_middleware_1 = require("../../common/middleware/permission.middleware");
const users_service_1 = __importDefault(require("../services/users.service"));
function validateEmailIsFree(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield users_service_1.default.getUserByEmail(req.body.email);
        if (user) {
            return res.status(400).send({ errors: ['User email already exists'] });
        }
        return next();
    });
}
exports.validateEmailIsFree = validateEmailIsFree;
function onlyAdminCanChangePermissionFlags(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (((_a = req.body) === null || _a === void 0 ? void 0 : _a.permissionFlags) !== res.locals.user.permissionFlags) {
            const isAdmin = res.locals.jwt.permissionFlags & permission_middleware_1.PermissionFlag.ADMIN;
            if (!isAdmin) {
                return res.status(400).send({
                    errors: ['User cannot change permission flags'],
                });
            }
        }
        return next();
    });
}
exports.onlyAdminCanChangePermissionFlags = onlyAdminCanChangePermissionFlags;
function validatePatchEmail(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.body.email) {
            return validateEmailIsFree(req, res, next);
        }
        return next();
    });
}
exports.validatePatchEmail = validatePatchEmail;
;
function validateUserExists(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield users_service_1.default.readById(req.params.userId);
        if (user) {
            res.locals.user = user;
            return next();
        }
        return res.status(404).send({
            errors: [`User ${req.params.userId} not found`],
        });
    });
}
exports.validateUserExists = validateUserExists;
function addUserIdIfNeeded(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.userId) {
            req.body.userId = res.locals.jwt.userId;
        }
        return next();
    });
}
exports.addUserIdIfNeeded = addUserIdIfNeeded;
function extractUserId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        req.body.id = req.params.userId;
        return next();
    });
}
exports.extractUserId = extractUserId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvbWlkZGxld2FyZS91c2Vycy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlGQUErRTtBQUUvRSw4RUFBb0Q7QUFFcEQsU0FBc0IsbUJBQW1CLENBQ3JDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztRQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsMkJBQTJCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUU7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQVZELGtEQVVDO0FBRUQsU0FBc0IsaUNBQWlDLENBQ25ELEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOzs7UUFFMUIsSUFBSSxDQUFBLE1BQUEsR0FBRyxDQUFDLElBQUksMENBQUUsZUFBZSxNQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUMvRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsc0NBQWMsQ0FBQyxLQUFLLENBQUM7WUFDdEUsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixNQUFNLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDbEQsQ0FBQyxDQUFDO2FBQ047U0FDSjtRQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7O0NBQ2pCO0FBZEQsOEVBY0M7QUFFRCxTQUFzQixrQkFBa0IsQ0FDcEMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1FBRTFCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsT0FBTyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQUE7QUFURCxnREFTQztBQUFBLENBQUM7QUFFRixTQUFzQixrQkFBa0IsQ0FDcEMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1FBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksRUFBRTtZQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN2QixPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN4QixNQUFNLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFZLENBQUM7U0FDbEQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUFBO0FBYkQsZ0RBYUM7QUFFRCxTQUFzQixpQkFBaUIsQ0FDbkMsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1FBRTFCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNsQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FBQTtBQVRELDhDQVNDO0FBRUQsU0FBc0IsYUFBYSxDQUMvQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7UUFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0NBQUE7QUFQRCxzQ0FPQyJ9