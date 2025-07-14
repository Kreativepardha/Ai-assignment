// import { GoogleGenerativeAI } from '@google/generative-ai';
// import { config } from 'dotenv';
// import { systemPrompt } from '../prompts/basePrompt';
// import { createPrompt } from '../prompts/templates';

// config(); // Load .env

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
// const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// export async function runSession(customerName: string, concern?: string) {
//   const prompt = createPrompt(customerName, concern);

//   const result = await model.generateContent([
//     { role: 'user', parts: [{ text: `${systemPrompt}\n${prompt}` }] },
//   ]);

//   const response = await result.response;
//   const text = response.text();

//   return {
//     prompt,
//     response: text,
//   };
// }
