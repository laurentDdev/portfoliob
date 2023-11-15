import { Request, Response } from "express";
import TechnoService from "../services/TechnoService";


class TechnoController {

    async getAllTechnos(req: Request, res: Response) {
        try {
            const technos = await TechnoService.getAllTechnos();
            res.json(technos);
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getTechnoById(req: Request, res: Response) {
        try {
            const technoId = req.params.id
            const techno = await TechnoService.getTechnoById(technoId)
            if (!techno) {
                return res.status(404).json({message: 'Techno not found'})
            }
            res.json(techno)
        } catch (error : any) {
            res.status(500).json({error: error.message})
        }
    }

    async createTechno(req: Request, res: Response) {
        const technoData = req.body;
        try {
            const newTechno = await TechnoService.createTechno(technoData);
            res.status(201).json(newTechno);
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }


}