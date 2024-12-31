// frontend/src/components/AISelector.js
import React, { useState } from 'react';

const AISelector = ({ aiService, setAIService }) => {
  return (
    <select value={aiService} onChange={(e) => setAIService(e.target.value)}>
      <option value="openai">OpenAI</option>
      <option value="deepseek">DeepSeek</option>
    </select>
  );
};

export default AISelector;
