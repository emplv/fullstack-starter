import argon2 from 'argon2';

import { CRUD } from '../../common/interfaces/crud';
import { combinePermissionFlags, PermissionFlag } from '../../common/middleware/permission.middleware';
import UsersDao from '../daos/users.dao';

class UsersService implements CRUD {
    create: typeof UsersDao['addUser'] = (resource) => {
        return UsersDao.addUser(resource);
    }

    deleteById: typeof UsersDao['removeUserById'] = (id) => {
        return UsersDao.removeUserById(id);
    }

    list: typeof UsersDao['getUsers'] = (limit, page) => {
        return UsersDao.getUsers(limit, page);
    }

    patchById: typeof UsersDao['updateUserById'] = (id, resource) => {
        return UsersDao.updateUserById(id, resource);
    }

    putById: typeof UsersDao['updateUserById'] = (id, resource) => {
        return UsersDao.updateUserById(id, resource);
    }

    readById: typeof UsersDao['getUserById'] = (id) => {
        return UsersDao.getUserById(id);
    }

    getUserByUsername: typeof UsersDao['getUserByUsername'] = (username) => {
        return UsersDao.getUserByUsername(username);
    }

    getUserByUsernameWithPassword: typeof UsersDao['getUserByUsernameWithPassword'] = (username) => {
        return UsersDao.getUserByUsernameWithPassword(username);
    }



    // Only for demo purpose, to create inital admin user
    async addAdmin(): Promise<string> {
        const admin = await UsersDao.getUserByUsername(String(process.env.ADMIN_USERNAME));
        if (admin) {
            return admin._id;
        }
        const password = await argon2.hash(String(process.env.ADMIN_PASS));
        const id = await UsersDao.addUser({
            name: 'Admin',
            username: String(process.env.ADMIN_USERNAME),
            password,
            permissionFlags: combinePermissionFlags([
                PermissionFlag.PUBLIC,
                PermissionFlag.ADMIN,
            ]),
        });
        return id;
    }
}

export default new UsersService();
