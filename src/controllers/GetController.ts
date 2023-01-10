import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

export class GetController {
    async get(req: Request, res: Response) {
        
        let users = await userRepository.find()
            
        return res.json(users)
    } 
    async getId(req: Request, res:Response) {

        const { id } = req.params

        let users = await userRepository.findOneBy({id: Number(id)})

        return res.json(users)
    }  
}
