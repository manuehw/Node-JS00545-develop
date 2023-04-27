import { AddressEntity } from "./entities/address.entity";
import { v4 as uuid } from 'uuid';

export class Address implements AddressEntity {
    id: string;
    street?: string;
    state?: string;
    city?: string;
    country?: string;
    zip?: string;    

    constructor(address: AddressEntity){
        this.id = uuid();
        this.street = address?.street;
        this.state = address?.state;
        this.city = address?.city;
        this.country = address?.country;
        this.zip = address?.zip;    
    }

}