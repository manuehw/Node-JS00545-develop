import { Response } from "express";

export enum HttpStatus {
    OK= 200,
    CREATED= 201,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500
}


export class HttpResponse {
    
    OK(res: Response, data?: any): Response {
        let responseJson: any = {
            status: HttpStatus.OK,
            description: 'OK',
        }
        if(data) responseJson = {...responseJson, schema: data}
        return res.status(HttpStatus.OK).json(responseJson)
    }
    
    NotFound(res: Response): Response {
        return res.status(HttpStatus.NOT_FOUND).json({
            status: HttpStatus.NOT_FOUND,
            description: 'User not found'
        })
    }
    
    Created(res: Response, data: any): Response {
        return res.status(HttpStatus.CREATED).json({
            status: HttpStatus.CREATED,
            description: 'Created',
            schema: data
        })
    }
    
    Invalid(res: Response): Response {
        return res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
            status: HttpStatus.METHOD_NOT_ALLOWED,
            description: 'Invalid input',
        })
    }

    Error(res: Response, data: any): Response {
        return res.status(data.status).json({
            status: data.status,
            description: data.message,
        })
    }
}