const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    taskID: Number,
    title: String,
    description:  [String],
    status: String,
    assignedTo: String,
    
})
const Task = mongoose.model('Tasks', taskSchema);

module.exports = Task;