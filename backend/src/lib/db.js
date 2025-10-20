import mongoose from'mongoose';

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MONGODB CONNECTED ✅:", conn.connection.host);
    } 
    catch (error) {
        console.log("Error Connecting to MONGODB ❌:", error)
        process.exit(1); //1 status code indicates error and exits the process, 0 means success
    }
}