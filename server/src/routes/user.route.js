import { Router } from "express";
import { health, login, register } from "../controllers/user.controllers.js";
import { verifyToken } from "../middleware/jwt.middleware.js";


const router = Router()

router.route("/health").get(health)
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/jwtverify").get(verifyToken)


export default router