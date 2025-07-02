import mongoose from "mongoose";

async function main() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL!);
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        process.exit(1);
    }
}

main();

export default mongoose;
