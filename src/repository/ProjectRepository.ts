import ProjectModel from "../models/project"

class ProjectRepository {
    async getAllProjects() {
        try {
            const projects = await ProjectModel.find();
            return projects;
        } catch (error: any) {
            throw new Error(`Error fetching projects ${error.message}`);
        }
    }

    async getProjectById(projectId: string) {
        try {
            const project = await ProjectModel.findById(projectId);
            return project;
        } catch (error: any) {
            throw new Error(`Error fetching project ${error.message}`);
        }
    }

    async createProject(projectData: {title: string, description: string, imageUrl: string, codeUrl: string}) {
        try {
            const newProject = await ProjectModel.create(projectData);
            return newProject;
        }catch(error: any) {
            throw new Error(`Error creating project ${error.message}`);
        }
    }
}


export default new ProjectRepository()