import express from "express"
import ProjectRouter from "./project.route";
import AuthRouter from "./auth.router";

const router = express.Router();

router.use("/project", ProjectRouter);
router.use("/auth", AuthRouter)

export default router