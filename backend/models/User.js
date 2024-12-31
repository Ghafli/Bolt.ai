// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }],
});

module.exports = mongoose.model('User', userSchema);
