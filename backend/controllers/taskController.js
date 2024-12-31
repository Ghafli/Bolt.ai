// backend/controllers/taskController.js
const Task = require('../models/Task');

const createTask = async (req, res) => {
  const { title, description, assignedTo, status, deadline } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  try {
    const task = new Task({ title, description, assignedTo, status, deadline });
    await task.save();
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

module.exports = { createTask };
