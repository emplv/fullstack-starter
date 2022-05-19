import express from 'express';
import { PermissionFlag } from '../../common/middleware/permission.middleware';

import userService from '../services/users.service';

export async function validateUsernameIsFree(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const user = await userService.getUserByUsername(req.body.username);
    if (user) {
        return res.status(400).send({ errors: ['User username already exists'] });
    }
    return next();
}

export async function onlyAdminCanChangePermissionFlags(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (req.body?.permissionFlags && req.body?.permissionFlags !== res.locals.user.permissionFlags) {
        const isAdmin = res.locals.jwt.permissionFlags & PermissionFlag.ADMIN;
        if (!isAdmin) {
            return res.status(400).send({
                errors: ['User cannot change permission flags'],
            });
        }
    }
    return next();
}

export async function validatePatchUsername(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (req.body.username) {
        return validateUsernameIsFree(req, res, next);
    }
    return next();
};

export async function validateUserExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const user = await userService.readById(req.params.userId);
    if (user) {
        res.locals.user = user;
        return next();
    }
    return res.status(404).send({
        errors: [`User ${req.params.userId} not found`],
    });
}

export async function addUserIdIfNeeded(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    if (!req.body.userId) {
        req.body.userId = res.locals.jwt.userId;
    }
    return next();
}

export async function extractUserId(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    req.body.id = req.params.userId;
    return next();
}
