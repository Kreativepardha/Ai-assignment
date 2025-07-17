
import readline from 'readline';
import { runGeminiSession } from './sessions/geminiRunner';
import { logConversation } from './sessions/logManager';
import { runOllamaSession } from './sessions/ollamaRunner';
import { logPromptIteration } from './sessions/promptLogger';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🧠 Gemini CLI - Sales AI Assistant\n');

rl.question('Enter customer name: ', (name) => {
  rl.question('Enter concern (or leave blank): ', async (concern) => {
    const { prompt, response } = await runGeminiSession(name, concern || undefined);

    console.log('\n🤖 Gemini Response:\n');
    console.log(response);

    logConversation(name, prompt, response);

    // Auto-log to PromptIterations.md
    // Find the next iteration number (simple: count lines starting with | in the file)
    const fs = require('fs');
    const path = require('path');
    const promptLogPath = path.join(__dirname, '../PromptIterations.md');
    let iteration = 1;
    if (fs.existsSync(promptLogPath)) {
      const lines = fs.readFileSync(promptLogPath, 'utf8').split('\n');
      iteration = lines.filter(line => line.startsWith('|') && !line.includes('---')).length;
    }
    const scenario = concern ? `Customer: ${name}, Concern: ${concern}` : `Customer: ${name}`;
    const analysis = '';
    const changes = '';
    logPromptIteration(iteration, prompt, scenario, response, analysis, changes);
    rl.close();
  });
});
