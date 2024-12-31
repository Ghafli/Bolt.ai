// backend/services/deepseekService.js
const axios = require('axios');

const generateCodeWithDeepSeek = async (prompt, language) => {
  try {
    const response = await axios.post('http://localhost:5001/generate-code', {
      prompt,
      language,
    });
    return response.data.code;
  } catch (error) {
    throw new Error('Failed to generate code with DeepSeek');
  }
};

module.exports = { generateCodeWithDeepSeek };
