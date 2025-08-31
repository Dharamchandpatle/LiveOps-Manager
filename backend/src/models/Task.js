// src/models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    summary: { type: String, required: true },
    description: { type: String },
    taskList: { type: String },
    priority: { type: String, default: 'None' },
    type: { type: String },
    files: [{ type: String }],
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', TaskSchema);

export default Task; // ✅ ESM export
