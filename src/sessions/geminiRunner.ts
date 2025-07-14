// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { config } from 'dotenv';
// import { systemPrompt } from '../prompts/basePrompt';
// import { createPrompt } from '../prompts/templates';

// config(); // Load .env

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// export async function runGeminiSession(customerName: string, concern?: string) {
//   const prompt = createPrompt(customerName, concern);

//   const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });

 
//   const result =  await model.generateContent(prompt)

//   const response = await result.response.text();
//   return { prompt, response };
// }
