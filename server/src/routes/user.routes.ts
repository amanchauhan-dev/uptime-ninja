import express from "express"
import UserController from "../controllers/user.controller";


const router = express.Router();

router.get("/", UserController.index)
export default router