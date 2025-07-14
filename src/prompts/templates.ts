export function createPrompt(customerName: string, concern?: string): string {
 return `You are on a call with ${customerName}, a small business owner.
${concern ? `They are concerned about ${concern}.` : ''}

Generate a friendly, persuasive, clear outbound call script introducing a SaaS productivity tool that improves teamwork and automates tasks, highlights ROI, and closes with a clear CTA for scheduling a demo.`;

}
