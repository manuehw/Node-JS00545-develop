import { UserEntity } from "./entities/user.entity";
import { User } from "./user.value";

export interface UserRepository {
    getusersById(id:string):Promise <UserEntity>;

    updateUsersById(user: UserEntity):Promise <UserEntity>;

    deleteUsersById(id:string): void;

    createUser(user: User):Promise <UserEntity>;
    
    getUsers():Promise <UserEntity[]>;
}