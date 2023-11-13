import { Request, Response } from "express";
import ProjectService from "../services/ProjectService";

class ProjectController {
    async getAllProjects(req: Request, res: Response) {
        try {
            const projects = await ProjectService.getAllProjects();
            res.json(projects);
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getProjectById(req: Request, res: Response) {
        const projectId = req.params.id;
        try {
            const project = await ProjectService.getProjectById(projectId);
            if (!project) {
                return res.status(404).json({message: 'Project not found'})
            }
            res.json(project)
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }

    async createProject(req: Request, res: Response) {
        const projectData = req.body;
        try {
            const newProject = await ProjectService.createProject(projectData);
            res.status(201).json(newProject);
        } catch (error: any) {
            res.status(500).json({error: error.message})
        }
    }
}

export default new ProjectController();