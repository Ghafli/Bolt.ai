// backend/models/Project.js
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  language: String,
  code: String,
  history: [{ code: String, timestamp: Date }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});

module.exports = mongoose.model('Project', projectSchema);
