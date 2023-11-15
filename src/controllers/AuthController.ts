import { Request, Response } from "express";
import bcrypt from "bcrypt"
class AuthController {
    async login(req: Request, res: Response) {

    }
    async verifyPassword(hashedPassword: string,password: string) {
        return bcrypt.compareSync(password, hashedPassword)
    }
}

export default new AuthController()