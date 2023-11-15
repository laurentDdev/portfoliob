import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
    async getUserById(req: Request, res: Response) {
        try {
            const userId = req.params.id
            const user = await UserService.getUserById(userId);
            if (!user) {
                return res.status(404).json({message: 'User not found'})
            }
            res.json({id: user.id})
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }
}

export default new UserController()