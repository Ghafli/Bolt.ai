// backend/services/aiService.js
const axios = require('axios');

const generateCodeWithOpenAI = async (prompt, language) => {
  const response = await axios.post(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-davinci-003',
      prompt: `Generate ${language} code for: ${prompt}`,
      max_tokens: 150,
    },
    {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data.choices[0].text.trim();
};

module.exports = { generateCodeWithOpenAI };
