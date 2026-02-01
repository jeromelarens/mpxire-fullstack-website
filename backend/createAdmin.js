import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const email = "mpxire007@gmail.com";
const password = "Mpxir725";

const existing = await User.findOne({ email });
if (existing) {
  console.log("Admin already exists");
  process.exit();
}

const hashedPassword = await bcrypt.hash(password, 10);

await User.create({
  email,
  password: hashedPassword,
  role: "admin",
});

console.log("Admin user created");
process.exit();