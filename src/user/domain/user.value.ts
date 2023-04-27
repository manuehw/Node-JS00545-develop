import { AddressEntity } from "./entities/address.entity";
import { UserEntity } from "./entities/user.entity";
import { v4 as uuid } from 'uuid';

export class User implements UserEntity {
    id: string;
    name: string | null;
    email: string | null;
    birthDate: string | null;
    address: AddressEntity | null;

    constructor(user: Partial<UserEntity>){
        this.id = uuid();
        this.name = user?.name ?? null;
        this.email = user?.email ?? null;    
        this.birthDate = user?.birthDate ?? null;
        this.address = user.address ?? null;
    }

}