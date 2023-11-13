import TechnoRepository from "../repository/TechnoRepository"

class TechnoService {
    async getAllTechnos() {
        return TechnoRepository.getAllTechnos();
    }

    async getTechnoById(technoId: string) {
        return TechnoRepository.getTechnoById(technoId)
    }
    async createTechno(technoData: {name: string, imageUrl: string}) {
        return TechnoRepository.createTechno(technoData)
    }
}

export default new TechnoService()