import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const checkSchema = new mongoose.Schema({
  employeeId: { type: ObjectId, ref: "Employee" },
  taskId: { type: ObjectId, ref: "Task" },
  action: { type: String, enum: ["check-in", "check-out"] },
  ts: { type: Date, default: Date.now }
});

export default mongoose.model("CheckInOut", checkSchema);
