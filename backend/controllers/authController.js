// backend/controllers/authController.js
const User = require('../models/User');
const { validateRegisterInput } = require('../utils/validators');

const register = async (req, res) => {
  const { username, password } = req.body;
  const { valid, message } = validateRegisterInput(username, password);
  if (!valid) {
    return res.status(400).json({ error: message });
  }
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    const user = new User({ username, password });
    await user.save();
    res.json({ message: 'User registered' });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
};

module.exports = { register };
