// frontend/src/components/TaskBoard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskBoard = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`http://localhost:5000/api/projects/${projectId}/tasks`);
      setTasks(response.data);
    };
    fetchTasks();
  }, [projectId]);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map((task) => (
        <div key={task._id}>{task.title}</div>
      ))}
    </div>
  );
};

export default TaskBoard;
