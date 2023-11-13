import express, { Application } from "express"
import dotenv from "dotenv"
import ProjectRouter from "./routes/project.route"
dotenv.config()
const app: Application = express()

app.use(express.json())

app.use(ProjectRouter)



export default app;