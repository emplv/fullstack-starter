import { UserDto } from './user.dto';

export interface CreateUserDto extends 
    Pick<UserDto, 'username' | 'password' | 'name'>, 
    Partial<Pick<UserDto, 'permissionFlags'>> {}
