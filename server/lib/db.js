import mongoose from "mongoose";

export const conncetDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.log("Error in connecting to DB", err);
        process.exit(1);
    }
};