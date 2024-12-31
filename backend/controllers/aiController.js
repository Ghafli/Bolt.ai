// backend/controllers/aiController.js
const { generateCodeWithOpenAI } = require('../services/aiService');
const { generateCodeWithDeepSeek } = require('../services/deepseekService');
const { validateCodeGenerationInput } = require('../utils/validators');

const generateCode = async (req, res) => {
  const { prompt, language, aiService } = req.body;
  const { valid, message } = validateCodeGenerationInput(prompt, language);
  if (!valid) {
    return res.status(400).json({ error: message });
  }
  try {
    let code;
    if (aiService === 'openai') {
      code = await generateCodeWithOpenAI(prompt, language);
    } else if (aiService === 'deepseek') {
      code = await generateCodeWithDeepSeek(prompt, language);
    } else {
      return res.status(400).json({ error: 'Invalid AI service' });
    }
    res.json({ code });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate code' });
  }
};

module.exports = { generateCode };
