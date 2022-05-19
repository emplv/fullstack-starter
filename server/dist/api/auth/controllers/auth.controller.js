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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
// @ts-expect-error
const jwtSecret = process.env.JWT_SECRET;
class AuthController {
    generateToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshId = req.body.userId + jwtSecret;
                const salt = crypto_1.default.createSecretKey(crypto_1.default.randomBytes(16));
                const hash = crypto_1.default
                    .createHmac('sha512', salt)
                    .update(refreshId)
                    .digest('base64');
                req.body.refreshKey = salt.export();
                const token = jsonwebtoken_1.default.sign(req.body, jwtSecret, {
                    expiresIn: '10h',
                });
                return res
                    .status(201)
                    .send({
                    accessToken: token,
                    refreshToken: hash,
                    user: {
                        _id: req.body.userId,
                        email: req.body.email,
                        name: req.body.name,
                        caloriesLimit: req.body.caloriesLimit,
                        permissionFlags: req.body.permissionFlags,
                    }
                });
            }
            catch (err) {
                console.warn('[Error] AuthController.generateToken:', err);
                return res.status(500).send();
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9hdXRoL2NvbnRyb2xsZXJzL2F1dGguY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUErQjtBQUMvQixvREFBNEI7QUFFNUIsbUJBQW1CO0FBQ25CLE1BQU0sU0FBUyxHQUFXLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBRWpELE1BQU0sY0FBYztJQUNWLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxJQUFJO2dCQUNBLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDOUMsTUFBTSxJQUFJLEdBQUcsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxJQUFJLEdBQUcsZ0JBQU07cUJBQ2QsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7cUJBQzFCLE1BQU0sQ0FBQyxTQUFTLENBQUM7cUJBQ2pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNwQyxNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRTtvQkFDeEMsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLENBQUMsQ0FBQztnQkFDSCxPQUFPLEdBQUc7cUJBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUM7b0JBQ0YsV0FBVyxFQUFFLEtBQUs7b0JBQ2xCLFlBQVksRUFBRSxJQUFJO29CQUNsQixJQUFJLEVBQUU7d0JBQ0YsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTTt3QkFDcEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSzt3QkFDckIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSTt3QkFDbkIsYUFBYSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYTt3QkFDckMsZUFBZSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZTtxQkFDNUM7aUJBQ0osQ0FBQyxDQUFDO2FBQ1Y7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDakM7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==