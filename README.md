# Bolt.ai+

Bolt.ai+ is an advanced web app that integrates AI-powered code generation, real-time collaboration, task management, and version control. It’s designed for individual developers, small teams, and enterprises.

## Features
- **AI-Powered Code Generation**: Generate code snippets or entire modules using AI (OpenAI, DeepSeek).
- **Code Optimization**: Optimize code using Ollama.
- **Real-Time Collaboration**: Sync code changes in real time.
- **Task Management**: Create, assign, and track tasks.
- **Version Control**: Automatically commit code to Git.
- **Project Management**: Create and manage coding projects.

## Tech Stack
- **Frontend**: React.js, Monaco Editor, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB, Socket.IO
- **AI Services**: OpenAI, DeepSeek, Ollama

## Setup
1. **Backend**:
   - Navigate to the `backend` folder.
   - Create a `.env` file and add your environment variables.
   - Run `npm install` and `npm start`.

2. **Frontend**:
   - Navigate to the `frontend` folder.
   - Create a `.env` file and add your environment variables.
   - Run `npm install` and `npm start`.

## API Endpoints
- `POST /api/auth/register`: Register a new user.
- `POST /api/ai/generate-code`: Generate code using AI.
- `POST /api/ai/optimize-code`: Optimize code using Ollama.
- `POST /api/projects`: Create a new project.
- `POST /api/tasks`: Create a new task.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss the changes.

## License
MIT
