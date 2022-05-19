import express from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from '../common/common.routes';
import UsersController from './controllers/users.controller';
import { validateUsernameIsFree, onlyAdminCanChangePermissionFlags, validatePatchUsername, validateUserExists, extractUserId } from './middleware/users.middleware';
import { validJWTNeeded } from '../auth/middleware/jwt.middleware';
import { permissionFlagRequired, selfOrAdmin, PermissionFlag } from '../common/middleware/permission.middleware';
import { verifyBodyValidationErrors } from '../common/middleware/verifyBodyValidationErrors.middleware';


export class UsersRoutes extends CommonRoutesConfig {
    constructor(router: express.Router) {
        super(router);
    }

    configureRoutes(): express.Router {
        this.router
            .route(`/users`)
            .all(
                validJWTNeeded,
                permissionFlagRequired(PermissionFlag.ADMIN),
            )
            .get(UsersController.listUsers)
            .post(
                body('username')
                    .isString()
                    .isLength({ min: 3 })
                    .withMessage('Must include 3+ characters'),
                body('password')
                    .isString()
                    .isLength({ min: 5 })
                    .withMessage('Must include password (5+ characters)'),
                body('name').isString(),
                body('permissionFlags').isInt().optional(),
                verifyBodyValidationErrors,
                validateUsernameIsFree,
                UsersController.createUser
            );

        // This route "/users/add-admin" is only to easy the DEMO admin creation - normally should be handled via migrations
        this.router
            .route('/users/add-admin')
            .get(UsersController.addAdmin)

        this.router
            .route(`/users/permission-flags`)
            .get(
                validJWTNeeded,
                permissionFlagRequired(PermissionFlag.ADMIN),
                UsersController.listPermissionFlags,
            );

        this.router.param(`userId`, extractUserId);
        this.router
            .route(`/users/:userId`)
            .all(
                validJWTNeeded,
                selfOrAdmin,
                validateUserExists,
            )
            .get(UsersController.getUserById)
            .put([
                permissionFlagRequired(PermissionFlag.ADMIN),
                body('username')
                    .isString()
                    .isLength({ min: 3 })
                    .withMessage('Must include 3+ characters'),
                body('password')
                    .isString()
                    .isLength({ min: 5 })
                    .withMessage('Must include password (5+ characters)'),
                body('name').isString(),
                body('permissionFlags').isInt(),
                verifyBodyValidationErrors,
                validateUsernameIsFree,
                UsersController.put,
            ])
            .patch([
                body('username')
                    .isString()
                    .isLength({ min: 3 })
                    .withMessage('Username must be 3+ characters')
                    .optional(),
                body('password')
                    .isString()
                    .isLength({ min: 5 })
                    .withMessage('Password must be 5+ characters')
                    .optional(),
                body('name').isString().optional(),
                body('permissionFlags').isInt().optional(),
                verifyBodyValidationErrors,
                validatePatchUsername,
                onlyAdminCanChangePermissionFlags,
                UsersController.patch,
            ])
            .delete(UsersController.removeUser);

        return this.router;
    }
}
