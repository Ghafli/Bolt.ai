// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from './components/CodeEditor';
import AuthForm from './components/AuthForm';
import TaskBoard from './components/TaskBoard';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';
import AISelector from './components/AISelector';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [aiService, setAIService] = useState('openai');

  const handleGenerateCode = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/ai/generate-code', {
        prompt,
        language,
        aiService,
      });
      setGeneratedCode(response.data.code);
    } catch (error) {
      console.error('Error generating code:', error);
    }
    setIsLoading(false);
  };

  const handleOptimizeCode = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/ai/optimize-code', {
        code: generatedCode,
      });
      setGeneratedCode(response.data.optimizedCode);
    } catch (error) {
      console.error('Error optimizing code:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Bolt.ai+</h1>
      {!user ? (
        <AuthForm onLogin={setUser} />
      ) : (
        <>
          <div>
            <AISelector aiService={aiService} setAIService={setAIService} />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt"
            />
            <button onClick={handleGenerateCode} disabled={isLoading}>
              {isLoading ? 'Generating...' : 'Generate Code'}
            </button>
            <button onClick={handleOptimizeCode} disabled={isLoading}>
              {isLoading ? 'Optimizing...' : 'Optimize Code'}
            </button>
          </div>
          <CodeEditor code={generatedCode} setCode={setGeneratedCode} language={language} />
          <TaskBoard projectId={projectId} />
          <ProjectPage projectId={projectId} />
        </>
      )}
    </div>
  );
};

export default App;
