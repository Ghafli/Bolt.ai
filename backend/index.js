// backend/index.js
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
