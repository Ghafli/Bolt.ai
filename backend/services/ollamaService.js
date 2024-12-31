// backend/services/ollamaService.js
const axios = require('axios');

const optimizeCodeWithOllama = async (code) => {
  try {
    const response = await axios.post('http://localhost:5002/optimize-code', {
      code,
    });
    return response.data.optimizedCode;
  } catch (error) {
    throw new Error('Failed to optimize code with Ollama');
  }
};

module.exports = { optimizeCodeWithOllama };
