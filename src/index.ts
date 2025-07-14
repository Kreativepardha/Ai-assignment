import readline from 'readline';
import { logConversation } from './sessions/logManager';
import { runOllamaSession } from './sessions/ollamaRunner';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  console.log('🧠 LLaMA 3 CLI - Sales AI Assistant\n');

  
rl.question('Enter customer name: ', (name) => {
  rl.question('Enter concern (or leave blank): ', async (concern) => {
    const { prompt, response } = await runOllamaSession(name, concern || undefined);

  console.log('\n🤖 LLaMA 3 Response:\n');

    logConversation(name, prompt, response);
    rl.close();
  });
});
