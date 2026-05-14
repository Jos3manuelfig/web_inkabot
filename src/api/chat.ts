export interface ChatRequest {
  messages: Array<{ role: string; content: string }>;
  systemPrompt: string;
}

export interface ChatResponse {
  content: string;
  error?: string;
}

export const chatWithAnthropic = async (request: ChatRequest): Promise<ChatResponse> => {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        system: request.systemPrompt,
        messages: request.messages,
      }),
    });

    const data = await response.json();
    return { content: data.content[0].text };

  } catch (error) {
    console.error('Error en chat:', error);
    return {
      content: '',
      error: 'Lo siento, ocurrió un error. Intenta de nuevo.'
    };
  }
};