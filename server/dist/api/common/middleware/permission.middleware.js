"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combinePermissionFlags = exports.selfOrAdmin = exports.permissionFlagRequired = exports.PermissionFlag = void 0;
var PermissionFlag;
(function (PermissionFlag) {
    PermissionFlag[PermissionFlag["PUBLIC"] = 1] = "PUBLIC";
    PermissionFlag[PermissionFlag["ADMIN"] = 2] = "ADMIN";
})(PermissionFlag = exports.PermissionFlag || (exports.PermissionFlag = {}));
function permissionFlagRequired(requiredFlag) {
    return (req, res, next) => {
        if (res.locals.jwt.permissionFlags & requiredFlag) {
            return next();
        }
        return res.status(403).send();
    };
}
exports.permissionFlagRequired = permissionFlagRequired;
function selfOrAdmin(req, res, next) {
    if (req.params.userId === res.locals.jwt.userId
        || res.locals.jwt.permissionFlags & PermissionFlag.ADMIN) {
        return next();
    }
    return res.status(403).send();
}
exports.selfOrAdmin = selfOrAdmin;
function combinePermissionFlags(flags) {
    return flags.reduce((acc, flag) => acc | flag, 0);
}
exports.combinePermissionFlags = combinePermissionFlags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS9jb21tb24vbWlkZGxld2FyZS9wZXJtaXNzaW9uLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsSUFBWSxjQUdYO0FBSEQsV0FBWSxjQUFjO0lBQ3RCLHVEQUFVLENBQUE7SUFDVixxREFBWSxDQUFBO0FBQ2hCLENBQUMsRUFIVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQUd6QjtBQUVELFNBQWdCLHNCQUFzQixDQUFDLFlBQTRCO0lBQy9ELE9BQU8sQ0FDSCxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUM1QixFQUFFO1FBQ0EsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsWUFBWSxFQUFFO1lBQy9DLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDakI7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQVhELHdEQVdDO0FBRUQsU0FBZ0IsV0FBVyxDQUN2QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjtJQUUxQixJQUNJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU07V0FDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQyxLQUFLLEVBQzFEO1FBQ0UsT0FBTyxJQUFJLEVBQUUsQ0FBQztLQUNqQjtJQUNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsQyxDQUFDO0FBWkQsa0NBWUM7QUFFRCxTQUFnQixzQkFBc0IsQ0FBQyxLQUF1QjtJQUMxRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCx3REFFQyJ9