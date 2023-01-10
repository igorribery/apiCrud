import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import { notFoundError } from "../helpers/api-error";

export class UpdateController {
    async update(req: Request, res: Response) {
        const { id, name, lastName, email } = req.body

        const userId = await userRepository.findOne({ where: {id}});

            if (!userId) {
                throw new notFoundError('User not found')
            } else {
                
            const record = await userRepository.update(userId, {name, lastName, email })

            res.json(record);
        }
    }
}