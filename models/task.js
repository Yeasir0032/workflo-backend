const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // boards collection
  columns: [
    {
      id: Number,
      cards: [
        {
          title: String,
          details: String,
          priority: String,
          deadline: Date,
          createdAt: Number,
        },
      ],
    },
  ],
});
const task = mongoose.model("Task", TaskSchema);
module.exports = task;
