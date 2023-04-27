import { UserCase } from "../../application/userCase";
import { Request, Response } from "express";
import { HttpResponse } from "../http/httpResponse";

export class UserController {
    constructor(private readonly userCase: UserCase, private readonly httpResponse: HttpResponse){}

    public save = async ( req: Request, res: Response ) => {
        const {name, email, address, birthDate} = req.body;
        try{
            const user = await this.userCase.createUser({name, email, address, birthDate})
            this.httpResponse.Created(res, user)
        } catch(error){
            this.httpResponse.Error(res, error)
        }
    }
    
    public  getUserById = async (req: Request, res: Response) => {
        const {userId} = req.params;
        try{
            const user = await this.userCase.getUserById(userId);
            if (user)
                this.httpResponse.OK(res, user);
            else        
                this.httpResponse.NotFound(res);
        } catch(error){
            this.httpResponse.Error(res, error);
        }
    }

    public  updateUsersById = async (req: Request, res: Response)=>{
        const user = req.body;
        try{
            await this.userCase.updateUsersById(user);
            this.httpResponse.OK(res);
        } catch(error){
            this.httpResponse.Error(res, error);
        }
    }

    public deleteUsersById = async (req: Request, res: Response) => {
        const {userId} = req.params
        try{
            await this.userCase.deleteUsersById(userId);
            this.httpResponse.OK(res);
        } catch(error){
            this.httpResponse.Error(res, error);
        }
        
    }

    public getusers = async (_req: Request, res: Response ): Promise<void> => {
        const users = await this.userCase.getUsers()
        this.httpResponse.OK(res, users)
    }
    
}