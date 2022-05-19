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
const argon2_1 = __importDefault(require("argon2"));
const permission_middleware_1 = require("../../common/middleware/permission.middleware");
const users_dao_1 = __importDefault(require("../daos/users.dao"));
class UsersService {
    constructor() {
        this.create = (resource) => {
            return users_dao_1.default.addUser(resource);
        };
        this.deleteById = (id) => {
            return users_dao_1.default.removeUserById(id);
        };
        this.list = (limit, page) => {
            return users_dao_1.default.getUsers(limit, page);
        };
        this.patchById = (id, resource) => {
            return users_dao_1.default.updateUserById(id, resource);
        };
        this.putById = (id, resource) => {
            return users_dao_1.default.updateUserById(id, resource);
        };
        this.readById = (id) => {
            return users_dao_1.default.getUserById(id);
        };
        this.getUserByEmail = (email) => {
            return users_dao_1.default.getUserByEmail(email);
        };
        this.getUserByEmailWithPassword = (email) => {
            return users_dao_1.default.getUserByEmailWithPassword(email);
        };
    }
    // Only for demo purpose, to create inital admin user
    addAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield users_dao_1.default.getUserByEmail(String(process.env.ADMIN_EMAIL));
            if (admin) {
                return admin._id;
            }
            const password = yield argon2_1.default.hash(String(process.env.ADMIN_PASS));
            const id = yield users_dao_1.default.addUser({
                name: 'Admin',
                email: String(process.env.ADMIN_EMAIL),
                password,
                permissionFlags: (0, permission_middleware_1.combinePermissionFlags)([
                    permission_middleware_1.PermissionFlag.PUBLIC,
                    permission_middleware_1.PermissionFlag.ADMIN,
                ]),
            });
            return id;
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvc2VydmljZXMvdXNlcnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUc1Qix5RkFBdUc7QUFDdkcsa0VBQXlDO0FBRXpDLE1BQU0sWUFBWTtJQUFsQjtRQUNJLFdBQU0sR0FBK0IsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM5QyxPQUFPLG1CQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQTtRQUVELGVBQVUsR0FBc0MsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUNuRCxPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQTtRQUVELFNBQUksR0FBZ0MsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDaEQsT0FBTyxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFBO1FBRUQsY0FBUyxHQUFzQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRTtZQUM1RCxPQUFPLG1CQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUE7UUFFRCxZQUFPLEdBQXNDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQzFELE9BQU8sbUJBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQTtRQUVELGFBQVEsR0FBbUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUM5QyxPQUFPLG1CQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQTtRQUVELG1CQUFjLEdBQXNDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUQsT0FBTyxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUE7UUFFRCwrQkFBMEIsR0FBa0QsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNsRixPQUFPLG1CQUFRLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFBO0lBc0JMLENBQUM7SUFsQkcscURBQXFEO0lBQy9DLFFBQVE7O1lBQ1YsTUFBTSxLQUFLLEdBQUcsTUFBTSxtQkFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzdFLElBQUksS0FBSyxFQUFFO2dCQUNQLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNwQjtZQUNELE1BQU0sUUFBUSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLEVBQUUsR0FBRyxNQUFNLG1CQUFRLENBQUMsT0FBTyxDQUFDO2dCQUM5QixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUN0QyxRQUFRO2dCQUNSLGVBQWUsRUFBRSxJQUFBLDhDQUFzQixFQUFDO29CQUNwQyxzQ0FBYyxDQUFDLE1BQU07b0JBQ3JCLHNDQUFjLENBQUMsS0FBSztpQkFDdkIsQ0FBQzthQUNMLENBQUMsQ0FBQztZQUNILE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFlBQVksRUFBRSxDQUFDIn0=