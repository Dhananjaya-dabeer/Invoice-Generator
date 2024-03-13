import { Router } from "express"
import { health, invoice} from "../controllers/Invoice.controller.js"
const router = Router()

router.route("/invoice").post(invoice)
router.route("/health").get(health)


export default router