import readline from 'readline';
import { runGeminiSession } from './sessions/geminiRunner';
import { logConversation } from './sessions/logManager';

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
    rl.close();
  });
});
