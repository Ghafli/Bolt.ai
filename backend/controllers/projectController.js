// backend/controllers/projectController.js
const Project = require('../models/Project');
const User = require('../models/User');

const createProject = async (req, res) => {
  const { name, language, code, userId } = req.body;
  if (!name || !language || !code || !userId) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  try {
    const project = new Project({ name, language, code });
    await project.save();
    await User.findByIdAndUpdate(userId, { $push: { projects: project._id } });
    res.json({ project });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
};

module.exports = { createProject };
