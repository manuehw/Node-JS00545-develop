import { UserEntity } from "../domain/entities/user.entity";
import { UserError } from "../domain/errors/user.error";
import { UserIdError } from "../domain/errors/userId.error";
import { UserNotFoundError } from "../domain/errors/userNotFound.error";
import { UserRepository } from "../domain/user.repository";
import { User } from "../domain/user.value";
import {  validate } from 'uuid';

export class UserCase  {

    constructor(private readonly userRepository: UserRepository){}

    public async getUserById(id:string):Promise <UserEntity>{
        this.validateId(id);
        return await this.userRepository.getusersById(id);

    }
    public async updateUsersById(user: UserEntity):Promise <UserEntity>{
        this.validateUser(user);
        this.validateId(user.id);
        const users = await this.userRepository.getUsers()
        if(!users.some((u) => u.id === user.id))
            throw new UserNotFoundError()
        
        return await this.userRepository.updateUsersById(user);
    }
    public async deleteUsersById(id:string):Promise <void>{
        this.validateId(id);
        const users = await this.userRepository.getUsers()
        if(!users.some((u) => u.id === id))
            throw new UserNotFoundError()
        
        this.userRepository.deleteUsersById(id);

    }
    public async createUser(user: UserEntity):Promise <UserEntity>{
        this.validateUser(user);
        const newUser = new User(user)
        return await this.userRepository.createUser(newUser)
    }

    public async getUsers():Promise <UserEntity[]>{
        return await this.userRepository.getUsers();
    }

    private validateUser(user:UserEntity ){
        const values = Object.values(user);
        if(values.some((value) => !value))
            throw new UserError();
    }

    private validateId(id:string ){
        console.log(validate(id))
        if(!validate(id))
            throw new UserIdError();
    }

}