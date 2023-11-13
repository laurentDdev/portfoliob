import ProjectRepository from "../repository/ProjectRepository"

class ProjectService {
    async getAllProjects() {
        return ProjectRepository.getAllProjects();
    }

    async getProjectById(projectId: string) {
        return ProjectRepository.getProjectById(projectId);
    }

    async createProject(projectData: {title: string, description: string, imageUrl: string, codeUrl: string}) {
        return ProjectRepository.createProject(projectData)
    }
}

export default new ProjectService()