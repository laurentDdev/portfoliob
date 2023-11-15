import express, { Application } from "express"
import dotenv from "dotenv"
import router from "./routes/route"
dotenv.config()
const app: Application = express()

app.use(express.json())

app.use("/api/v1", router)



export default app;