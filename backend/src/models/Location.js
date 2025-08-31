import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const locationSchema = new mongoose.Schema({
  employeeId: { type: ObjectId, ref: "Employee" },
  taskId: { type: ObjectId, ref: "Task" },
  lat: Number,
  lng: Number,
  ts: { type: Date, default: Date.now }
});

export default mongoose.model("Location", locationSchema);
