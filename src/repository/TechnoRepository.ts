import TechnoModel from "../models/techno";

class TechnoRepository {
    async getAllTechnos() {
        try {
            const technos = await TechnoModel.find();
            return technos;
        } catch (error: any) {
            throw new Error(`Error fetching technos ${error.message}`);
        }
    }

    async getTechnoById(technoId: string) {
        try {
            const techno = await TechnoModel.findById(technoId);
            return techno;
        } catch (error: any) {
            throw new Error(`Error fetching techno ${error.message}`);
        }
    }

    async createTechno(technoData: {name: string, imageUrl: string}) {
        try {
            const newTechno = await TechnoModel.create(technoData);
            return newTechno;
        } catch (error: any) {
            throw new Error(`Error creating techno ${error.message}`);   
        }
    }
}

export default new TechnoRepository();