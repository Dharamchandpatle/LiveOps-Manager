import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const feedbackSchema = new mongoose.Schema({
  employeeId: { type: ObjectId, ref: "Employee" },
  taskId: { type: ObjectId, ref: "Task" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
}, { timestamps: true });

export default mongoose.model("Feedback", feedbackSchema);
