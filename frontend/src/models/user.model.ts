import mongoose from "@/lib/db";

const userSchema = new mongoose.Schema({
    name: String,
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
