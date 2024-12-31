import React, { useState } from 'react';

const ProjectDashboard = ({ projects, onAddProject }) => {
  const [newProject, setNewProject] = useState('');

  const handleAddProject = () => {
    if (newProject.trim()) {
      onAddProject(newProject);
      setNewProject('');
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Add a new project"
      />
      <button onClick={handleAddProject}>Add Project</button>
    </div>
  );
};

export default ProjectDashboard;
