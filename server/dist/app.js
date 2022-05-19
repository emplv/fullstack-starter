"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const { error: envError } = dotenv_1.default.config();
if (envError)
    throw envError;
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const api_router_1 = __importDefault(require("./api/api.router"));
/**
 * Config
 */
const app = (0, express_1.default)()
    .use(express_1.default.json())
    .use((0, cors_1.default)())
    .use((0, helmet_1.default)())
    .use(expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
    meta: false,
}));
/**
 * Routing
 */
app.use('/api', api_router_1.default);
app.get('/*', (req, res) => {
    res.send('API Server');
});
/**
 * Server
 */
const port = 3010;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsZ0JBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM1QyxJQUFJLFFBQVE7SUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU3QixzREFBOEI7QUFDOUIsMkNBQTZCO0FBQzdCLGlEQUFtQztBQUNuQyxnRUFBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLG9EQUE0QjtBQUU1QixrRUFBeUM7QUFFekM7O0dBRUc7QUFDSCxNQUFNLEdBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFO0tBQ3JDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ25CLEdBQUcsQ0FBQyxJQUFBLGNBQUksR0FBRSxDQUFDO0tBQ1gsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0tBQ2IsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDdkIsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekM7SUFDRCxJQUFJLEVBQUUsS0FBSztDQUNkLENBQUMsQ0FBQyxDQUFDO0FBRVI7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxvQkFBUyxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtJQUMxRCxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDO0FBRUg7O0dBRUc7QUFDSCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbEIsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDLENBQUMifQ==