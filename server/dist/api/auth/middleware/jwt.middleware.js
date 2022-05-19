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
exports.validJWTNeeded = exports.validRefreshBodyNeeded = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const users_service_1 = __importDefault(require("../../users/services/users.service"));
// @ts-expect-error
const jwtSecret = process.env.JWT_SECRET;
function validRefreshBodyNeeded(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        if (!((_a = req.body) === null || _a === void 0 ? void 0 : _a.refreshToken)) {
            return res.status(400).send({ errors: ['Missing refreshToken'] });
        }
        const user = yield users_service_1.default.getUserByEmailWithPassword(res.locals.jwt.email);
        const salt = crypto_1.default.createSecretKey(Buffer.from(res.locals.jwt.refreshKey.data));
        const hash = crypto_1.default
            .createHmac('sha512', salt)
            .update(res.locals.jwt.userId + jwtSecret)
            .digest('base64');
        if (hash === req.body.refreshToken) {
            req.body = {
                userId: user._id,
                email: user.email,
                permissionFlags: user.permissionFlags,
            };
            return next();
        }
        return res.status(400).send({ errors: ['Invalid refreshToken'] });
    });
}
exports.validRefreshBodyNeeded = validRefreshBodyNeeded;
function validJWTNeeded(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send();
    }
    try {
        const authorization = req.headers.authorization.split(' ');
        if (authorization[0] !== 'Bearer') {
            return res.status(401).send();
        }
        res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], jwtSecret);
        return next();
    }
    catch (err) {
        return res.status(403).send();
    }
}
exports.validJWTNeeded = validJWTNeeded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL2F1dGgvbWlkZGxld2FyZS9qd3QubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnRUFBK0I7QUFDL0Isb0RBQTRCO0FBRzVCLHVGQUE4RDtBQUU5RCxtQkFBbUI7QUFDbkIsTUFBTSxTQUFTLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFFakQsU0FBc0Isc0JBQXNCLENBQ3hDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOzs7UUFFMUIsSUFBSSxDQUFDLENBQUEsTUFBQSxHQUFHLENBQUMsSUFBSSwwQ0FBRSxZQUFZLENBQUEsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDckU7UUFDRCxNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsMEJBQTBCLENBQ3RELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FDdkIsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLGdCQUFNLENBQUMsZUFBZSxDQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FDOUMsQ0FBQztRQUNGLE1BQU0sSUFBSSxHQUFHLGdCQUFNO2FBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7YUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDekMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0JBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTthQUN4QyxDQUFDO1lBQ0YsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Q0FDckU7QUEzQkQsd0RBMkJDO0FBRUQsU0FBZ0IsY0FBYyxDQUMxQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjtJQUUxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7UUFDNUIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2pDO0lBQ0QsSUFBSTtRQUNBLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDL0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2pDO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsc0JBQUcsQ0FBQyxNQUFNLENBQ3ZCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFDaEIsU0FBUyxDQUNMLENBQUM7UUFDVCxPQUFPLElBQUksRUFBRSxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDakM7QUFDTCxDQUFDO0FBckJELHdDQXFCQyJ9