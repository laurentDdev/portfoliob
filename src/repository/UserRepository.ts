import UserModel from "../models/user";

class UserRepository {
    async getUserById(userId: string) {
        try {
            const user = await UserModel.findById(userId);
            return user;
        } catch (error: any) {
            throw new Error(`Error fetching user ${error.message}`);
        }
    }
}


export default new UserRepository()