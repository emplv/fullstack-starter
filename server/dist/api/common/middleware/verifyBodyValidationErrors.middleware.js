"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyBodyValidationErrors = void 0;
const express_validator_1 = require("express-validator");
function verifyBodyValidationErrors(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
    }
    return next();
}
exports.verifyBodyValidationErrors = verifyBodyValidationErrors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyaWZ5Qm9keVZhbGlkYXRpb25FcnJvcnMubWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvY29tbW9uL21pZGRsZXdhcmUvdmVyaWZ5Qm9keVZhbGlkYXRpb25FcnJvcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5REFBcUQ7QUFFckQsU0FBZ0IsMEJBQTBCLENBQ3RDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCO0lBRTFCLE1BQU0sTUFBTSxHQUFHLElBQUEsb0NBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDM0Q7SUFDRCxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFWRCxnRUFVQyJ9