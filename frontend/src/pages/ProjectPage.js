// frontend/src/pages/ProjectPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor';
import TaskBoard from '../components/TaskBoard';

const ProjectPage = ({ projectId }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await axios.get(`http://localhost:5000/api/projects/${projectId}`);
      setProject(response.data);
    };
    fetchProject();
  }, [projectId]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <CodeEditor code={project.code} setCode={(code) => setProject({ ...project, code })} language={project.language} />
      <TaskBoard projectId={projectId} />
    </div>
  );
};

export default ProjectPage;
