import { UsersService } from './users.service';
import { User } from 'shared-orm-library/src/entities/User';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
}
