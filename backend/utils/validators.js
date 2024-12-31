// backend/utils/validators.js
const validateRegisterInput = (username, password) => {
  if (!username || !password) {
    return { valid: false, message: 'Username and password are required' };
  }
  return { valid: true };
};

const validateCodeGenerationInput = (prompt, language) => {
  if (!prompt || !language) {
    return { valid: false, message: 'Prompt and language are required' };
  }
  return { valid: true };
};

module.exports = { validateRegisterInput, validateCodeGenerationInput };
