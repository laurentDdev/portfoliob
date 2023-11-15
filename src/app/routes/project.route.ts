import express, { Router } from "express";
import ProjectController from "../../controllers/ProjectController";
import { validateProject } from "../../validators/project.validator";

const ProjectRouter : Router = express.Router();

ProjectRouter.get("/", ProjectController.getAllProjects);
ProjectRouter.get("/project/:id", ProjectController.getProjectById);
ProjectRouter.post("/",validateProject, ProjectController.createProject);


export default ProjectRouter;