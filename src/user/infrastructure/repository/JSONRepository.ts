import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/user.repository";
import { User } from "../../domain/user.value";
import fs from 'fs'

export const JSON_PATH = 'src/users.json'

export class JSONRepository implements UserRepository{
    public async getUsers(): Promise<UserEntity[]> {
        return this.getData()
    }
    public async getusersById(id: string): Promise<UserEntity> {
        const users = this.getData();
        const user = users.find((user)=>user.id === id);

        return user;    
    }
    public async updateUsersById(updateUser: UserEntity): Promise<UserEntity> {
        let users = this.getData();
        const filteredUser = users.filter((user)=> user.id !== updateUser.id);
        users = [ ...filteredUser, updateUser ]
        this.upsertData(users);

        return updateUser;
    }
    public deleteUsersById(id: string): void {
        let users = this.getData();
        const filteredUser = users.filter((user)=> user.id !== id);
        this.upsertData(filteredUser);
    }

    public async createUser(user: User): Promise<UserEntity> {
        const users = this.getData();
        users.push(user);
        this.upsertData(users);
        return user;
    }

    public getData(): UserEntity[] {
        const users = fs.readFileSync(JSON_PATH, 'utf-8')
        return JSON.parse(users);
    }

    private upsertData(users: UserEntity[]){
        fs.writeFileSync(JSON_PATH, JSON.stringify(users), 'utf-8')
    }

}