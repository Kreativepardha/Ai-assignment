import fs from 'fs';
import path from 'path';

export function logPromptIteration(iteration: number, prompt: string, scenario: string, response: string, analysis: string, changes: string) {
  const filePath = path.join(__dirname, '../../PromptIterations.md');
  const row = `| ${iteration} | ${prompt.replace(/\n/g, ' ')} | ${scenario} | ${response.replace(/\n/g, ' ')} | ${analysis} | ${changes} |\n`;

  // Insert the row after the last existing iteration row, before the first row with '...'
  let content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const insertIndex = lines.findIndex(line => line.includes('| ...'));
  if (insertIndex !== -1) {
    lines.splice(insertIndex, 0, row);
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
  } else {
    // fallback: append at the end
    fs.appendFileSync(filePath, row, 'utf8');
  }
}