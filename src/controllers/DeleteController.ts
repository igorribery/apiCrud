import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";

export class DeleteController {
    async del(req: Request, res: Response) {
        
        const { id } = req.params;

        const service = userRepository.delete(id)

        return res.status(200).json(service)
    }
}