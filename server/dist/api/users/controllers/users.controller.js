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
const users_service_1 = __importDefault(require("../services/users.service"));
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield users_service_1.default.list(100, 0);
            return res.status(200).send(users);
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(req.body.id);
            return res.status(200).send(user);
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            const userId = yield users_service_1.default.create(req.body);
            return res.status(201).send({ id: userId });
        });
    }
    patch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.password) {
                req.body.password = yield argon2_1.default.hash(req.body.password);
            }
            yield users_service_1.default.patchById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.password = yield argon2_1.default.hash(req.body.password);
            yield users_service_1.default.putById(req.body.id, req.body);
            return res.status(204).send();
        });
    }
    removeUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield users_service_1.default.deleteById(req.body.id);
            return res.status(204).send();
        });
    }
    // Only for demo purpose, to create inital admin user
    addAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = yield users_service_1.default.addAdmin();
            return res.status(201).send({ id: userId });
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvdXNlcnMvY29udHJvbGxlcnMvdXNlcnMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLG9EQUE0QjtBQUU1Qiw4RUFBcUQ7QUFFckQsTUFBTSxlQUFlO0lBQ1gsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekQsTUFBTSxNQUFNLEdBQUcsTUFBTSx1QkFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUQ7WUFDRCxNQUFNLHVCQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssR0FBRyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxNQUFNLHVCQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3hELE1BQU0sdUJBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBSUQscURBQXFEO0lBQy9DLFFBQVEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN0RCxNQUFNLE1BQU0sR0FBRyxNQUFNLHVCQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0MsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9