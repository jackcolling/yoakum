export interface ChatConfig {
  chatflowid: string;
  apiHost: string;
}

export const chatConfig: ChatConfig = {
  chatflowid: "f68a51a5-0efa-4082-88f2-d24652ad530b",
  apiHost: "https://flowise-production-9c63.up.railway.app"
};

export async function sendMessage(message: string) {
  try {
    const response = await fetch(`${chatConfig.apiHost}/api/v1/prediction/${chatConfig.chatflowid}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: message,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text || data.answer || 'I apologize, but I encountered an error processing your request.';
  } catch (error) {
    console.error('Error:', error);
    return 'I apologize, but I encountered an error processing your request.';
  }
}