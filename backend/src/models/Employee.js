import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["manager", "employee"], required: true },
  phone: String,
}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);
