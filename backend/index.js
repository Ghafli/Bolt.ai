// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const aiRoutes = require('./routes/aiRoutes');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Socket.IO for real-time collaboration
io.on('connection', (socket) => {
  socket.on('join-project', (projectId) => {
    if (!projectId) {
      return socket.emit('error', 'Invalid project ID');
    }
    socket.join(projectId);
  });

  socket.on('code-change', (projectId, code) => {
    if (!projectId || !code) {
      return socket.emit('error', 'Invalid project ID or code');
    }
    socket.to(projectId).emit('code-update', code);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
