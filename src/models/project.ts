
import { Schema, model, Document } from "mongoose"

interface Project extends Document {
    title: string;
    description: string;
    imageUrl: string;
    codeUrl: string
}

const ProjectSchema = new Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String, required: true},
    codeUrl: {type: String, required: true},
})

const ProjectModel = model<Project>('Project', ProjectSchema);

export default ProjectModel;