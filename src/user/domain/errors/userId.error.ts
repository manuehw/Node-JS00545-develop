import { HttpStatus } from "../../infrastructure/http/httpResponse";

export class UserIdError extends Error {
    status: number = HttpStatus.BAD_REQUEST;

    constructor(){
        super();
        this.message = 'Invalid user id'; 
        this.status;
    }
}