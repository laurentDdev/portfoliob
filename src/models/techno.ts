import { Schema, model, Document } from "mongoose"

interface Techno extends Document {
    name: string,
    imageUrl: string
}

const TechnoSchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
})

const TechnoModel = model<Techno>('Techno', TechnoSchema)

export default TechnoModel;