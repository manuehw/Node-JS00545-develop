import { HttpStatus } from "../../infrastructure/http/httpResponse";

export class UserNotFoundError extends Error {
    status: number = HttpStatus.NOT_FOUND;

    constructor(){
        super();
        this.message = 'User not found'; 
        this.status;
    }
}