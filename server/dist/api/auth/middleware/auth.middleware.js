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
exports.verifyUserPassword = void 0;
const argon2_1 = __importDefault(require("argon2"));
const users_service_1 = __importDefault(require("../../users/services/users.service"));
function verifyUserPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield users_service_1.default.getUserByEmailWithPassword(req.body.email);
        if (user) {
            const passwordHash = user.password;
            if (yield argon2_1.default.verify(passwordHash, req.body.password)) {
                req.body = {
                    userId: user._id,
                    email: user.email,
                    name: user.name,
                    caloriesLimit: user.caloriesLimit,
                    permissionFlags: user.permissionFlags,
                };
                return next();
            }
        }
        res.status(400).send({ errors: ['Invalid email and/or password'] });
    });
}
exports.verifyUserPassword = verifyUserPassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9hdXRoL21pZGRsZXdhcmUvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUU1Qix1RkFBOEQ7QUFFOUQsU0FBc0Isa0JBQWtCLENBQ3BDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztRQUUxQixNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsMEJBQTBCLENBQ3RELEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNqQixDQUFDO1FBQ0YsSUFBSSxJQUFJLEVBQUU7WUFDTixNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksTUFBTSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdEQsR0FBRyxDQUFDLElBQUksR0FBRztvQkFDUCxNQUFNLEVBQUUsSUFBSSxDQUFDLEdBQUc7b0JBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztvQkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtvQkFDakMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO2lCQUN4QyxDQUFDO2dCQUNGLE9BQU8sSUFBSSxFQUFFLENBQUM7YUFDakI7U0FDSjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsK0JBQStCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUFBO0FBdEJELGdEQXNCQyJ9