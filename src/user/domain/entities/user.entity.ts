import { AddressEntity } from "./address.entity";

export class UserEntity {
    id?: string ;
    name?:string | null;
    birthDate?:string | null;
    email?:string | null;
    address?: AddressEntity | null;
}