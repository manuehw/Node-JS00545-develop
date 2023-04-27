import { HttpStatus } from "../../infrastructure/http/httpResponse";

export class UserError extends Error {
    status: number = HttpStatus.METHOD_NOT_ALLOWED;

    constructor(){
        super();
        this.message = 'Invalid Input'; 
        this.status;
    }
}