import { Request, Response } from "express";
import { userRepository } from "../repositories/UserRepository";
import { badRequestError } from "../helpers/api-error";

export class PostController {
    async create(req: Request, res: Response) {
        const { name, lastName, email} = req.body

        if(!email) {
            throw new badRequestError('Email é obrigatório')
        }

        const addUser = userRepository.create({name, lastName, email})
            
        await userRepository.save(addUser)
            
        return res.status(201).json(addUser)
    }
}