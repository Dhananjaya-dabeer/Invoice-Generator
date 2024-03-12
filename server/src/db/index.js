import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstances.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed", error)
    }
}

export default connectDB