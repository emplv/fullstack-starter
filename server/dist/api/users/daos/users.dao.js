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
const permission_middleware_1 = require("../../common/middleware/permission.middleware");
class UsersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.userSchema = new this.Schema({
            _id: String,
            email: String,
            password: { type: String, select: false },
            name: String,
            caloriesLimit: { type: Number, default: 2100 },
            permissionFlags: { type: Number, default: permission_middleware_1.PermissionFlag.PUBLIC },
        }, { id: false });
        this.User = mongoose_service_1.default.getMongoose().model('User', this.userSchema);
    }
    addUser(userFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = (0, uuid_1.v4)();
            const user = new this.User(Object.assign({ _id: userId }, userFields));
            yield user.save();
            return userId;
        });
    }
    getUserByEmail(email) {
        return this.User.findOne({ email: email }).exec();
    }
    getUserByEmailWithPassword(email) {
        return this.User.findOne({ email: email }, '_id email name permissionFlags caloriesLimit +password').exec();
    }
    removeUserById(userId) {
        return this.User.deleteOne({ _id: userId }).exec();
    }
    getUserById(userId) {
        return this.User.findById(userId).exec();
    }
    getUsers(limit = 25, page = 0) {
        return this.User.find({}, null, { limit, skip: limit * page }).exec();
    }
    updateUserById(userId, userFields) {
        return this.User.findByIdAndUpdate(userId, { $set: userFields }, { new: true }).exec();
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS91c2Vycy9kYW9zL3VzZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFvQztBQUVwQyw4RkFBcUU7QUFDckUseUZBQStFO0FBTy9FLE1BQU0sUUFBUTtJQUFkO1FBQ0ksV0FBTSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBRTlDLGVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDekIsR0FBRyxFQUFFLE1BQU07WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUN6QyxJQUFJLEVBQUUsTUFBTTtZQUNaLGFBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUM5QyxlQUFlLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxzQ0FBYyxDQUFDLE1BQU0sRUFBRTtTQUNwRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbEIsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUF1Q3hFLENBQUM7SUFyQ1MsT0FBTyxDQUFDLFVBQXlCOztZQUNuQyxNQUFNLE1BQU0sR0FBRyxJQUFBLFNBQU0sR0FBRSxDQUFDO1lBQ3hCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksaUJBQ3RCLEdBQUcsRUFBRSxNQUFNLElBQ1IsVUFBVSxFQUNmLENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRCxjQUFjLENBQUMsS0FBYTtRQUN4QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVELDBCQUEwQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSx3REFBd0QsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hILENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYztRQUN6QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFjO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsVUFBcUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUM5QixNQUFNLEVBQ04sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ3BCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2IsQ0FBQztDQUNKO0FBRUQsa0JBQWUsSUFBSSxRQUFRLEVBQUUsQ0FBQyJ9