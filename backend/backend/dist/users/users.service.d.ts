import { Repository } from 'typeorm';
import { User } from 'shared-orm-library/dist/entities/User';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
}
