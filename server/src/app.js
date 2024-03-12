import express from "express"
import cors from "cors"


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route import
import InvoiceRouter from "./routes/Invoice.route.js"
import userRouter from "./routes/user.route.js"

// route declaration
app.use("/api/v2/data", InvoiceRouter)
app.use("/api/v1/user", userRouter)
export default app