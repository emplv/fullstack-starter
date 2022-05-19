import express from 'express';
import argon2 from 'argon2';

import usersService from '../../users/services/users.service';

export async function verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    const user = await usersService.getUserByUsernameWithPassword(
        req.body.username
    );
    if (user) {
        const passwordHash = user.password;
        if (await argon2.verify(passwordHash, req.body.password)) {
            req.body = {
                userId: user._id,
                username: user.username,
                name: user.name,
                permissionFlags: user.permissionFlags,
            };
            return next();
        }
    }
    res.status(400).send({ errors: ['Invalid username and/or password'] });
}
