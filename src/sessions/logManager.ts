import fs from 'fs';
import path from 'path';

export function logConversation(customer: string, prompt: string, response: string) {
  const logPath = path.join(__dirname, `../../logs`);
  if (!fs.existsSync(logPath)) fs.mkdirSync(logPath);
  
  const file = path.join(logPath, `${customer.replace(/ /g, '_')}.md`);
  
  const timestamp = new Date().toISOString();
  const content = `## Customer: ${customer}\n\n**Time:** ${timestamp}\n\n**Model:** llama3\n\n### Prompt:\n${prompt}\n\n### Response:\n${response}\n\n---\n`;

  fs.appendFileSync(file, content, 'utf8');
}
