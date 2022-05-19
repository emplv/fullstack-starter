import express from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from '../common/common.routes';
import { verifyBodyValidationErrors } from '../common/middleware/verifyBodyValidationErrors.middleware';
import authController from './controllers/auth.controller';
import { validJWTNeeded, validRefreshBodyNeeded } from './middleware/jwt.middleware';
import { verifyUserPassword } from './middleware/auth.middleware';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(router: express.Router) {
        super(router);
    }

    configureRoutes(): express.Router {
        this.router.post(`/auth`, [
            body('username').isString(),
            body('password').isString(),
            verifyBodyValidationErrors,
            verifyUserPassword,
            authController.generateToken,
        ]);
        this.router.post(`/auth/refresh-token`, [
            validJWTNeeded,
            validRefreshBodyNeeded,
            authController.generateToken,
        ]);
        return this.router;
    }
}
