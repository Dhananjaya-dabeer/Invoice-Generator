import app from "./app.js"
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config()

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3001, () => {
            console.log(`server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(`MongoDB connection Failed `, error)
    })