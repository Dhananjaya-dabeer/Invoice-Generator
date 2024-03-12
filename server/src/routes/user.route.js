import { Router } from "express";
import { health, login, register } from "../controllers/user.controllers.js";


const router = Router()

router.route("/health").get(health)
router.route("/register").post(register)
router.route("/login").post(login)


export default router