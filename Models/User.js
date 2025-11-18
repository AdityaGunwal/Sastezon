import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name : {type: String, require: true},
    Email: {type: String, require: true},
    Password: {type: String, require: true},
    createdAt:{type: Date, default:Date.now}
})

export const User = mongoose.model("User", userSchema)