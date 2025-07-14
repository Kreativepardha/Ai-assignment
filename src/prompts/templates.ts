export function createPrompt(customerName: string, concern?: string): string {
  return `
Hi ${customerName}, I wanted to introduce our productivity platform that improves teamwork and automates tasks.

${concern ? `I understand you're concerned about ${concern}.` : ''}

We’ve helped many small businesses boost their ROI. Would you be open to a 15-minute demo?
  `;
}
