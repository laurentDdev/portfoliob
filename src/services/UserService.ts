import UserRepository from "../repository/UserRepository";

class UserService {
    async getUserById(userId: string) {
        return UserRepository.getUserById(userId);
    }
}

export default new UserService()