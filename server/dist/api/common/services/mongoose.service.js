"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const retryTimer = Number(process.env.MONGO_RETRY_TIMER) || 5000;
const mongoDbName = process.env.MONGO_DB;
class MongooseService {
    constructor() {
        this.count = 0;
        this.maxRetries = 10;
        this.mongooseOptions = {
            serverSelectionTimeoutMS: 5000,
        };
        this.connectWithRetry = () => {
            console.log(`[MongoDB] Attempting MongoDB connection #${this.count + 1}.`);
            mongoose_1.default
                .connect(`mongodb://database:27017/${mongoDbName}`, this.mongooseOptions)
                .then(() => {
                console.log('[MongoDB] Successfully connected to MongoDB.');
            })
                .catch((err) => {
                console.log(`[MongoDB] Failed to connect #${this.count + 1}. Error:`, err);
                this.count += 1;
                if (this.count >= this.maxRetries) {
                    console.log(`[MongoDB] Can't connect, max retries reached.`);
                    throw new Error(`Can't conenct to MongoDB`);
                }
                console.log(`[MongoDB] Retry in ${retryTimer / 1000 | 0} seconds.`);
                setTimeout(this.connectWithRetry, retryTimer);
            });
        };
        this.connectWithRetry();
    }
    getMongoose() {
        return mongoose_1.default;
    }
}
exports.default = new MongooseService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvY29tbW9uL3NlcnZpY2VzL21vbmdvb3NlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3REFBZ0M7QUFFaEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDakUsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFFekMsTUFBTSxlQUFlO0lBT2pCO1FBTlEsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsb0JBQWUsR0FBRztZQUN0Qix3QkFBd0IsRUFBRSxJQUFJO1NBQ2pDLENBQUM7UUFVRixxQkFBZ0IsR0FBRyxHQUFHLEVBQUU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pFLGtCQUFRO2lCQUNILE9BQU8sQ0FBQyw0QkFBNEIsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDeEUsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7WUFDaEUsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO29CQUM3RCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7aUJBQy9DO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEUsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQztRQXhCRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNQLE9BQU8sa0JBQVEsQ0FBQztJQUNwQixDQUFDO0NBb0JKO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9