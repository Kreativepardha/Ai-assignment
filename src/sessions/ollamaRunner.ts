import fetch from 'node-fetch'; // If using Node 18+, use global fetch
import { createPrompt } from '../prompts/templates';
import { systemPrompt } from '../prompts/basePrompt';


export async function runOllamaSession(customerName: string, concern?: string) {
  const userPrompt = createPrompt(customerName, concern);
 const prompt = `${systemPrompt}\n\n${userPrompt}`;

  const response = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3',
      prompt: prompt,
      stream: false
    })
  });

  const data = await response.json();
  return { prompt, response: data.response };
}
