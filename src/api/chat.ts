// Endpoint proxy para la API de Anthropic
// En producción, esto debería estar en un backend real

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
    // En un backend real, esto sería:
    // const response = await fetch('https://api.anthropic.com/v1/messages', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'x-api-key': process.env.ANTHROPIC_API_KEY,
    //     'anthropic-version': '2023-06-01',
    //   },
    //   body: JSON.stringify({
    //     model: 'claude-3-haiku-20240307',
    //     max_tokens: 1000,
    //     system: request.systemPrompt,
    //     messages: request.messages,
    //   }),
    // });

    // Por ahora, simulamos respuestas inteligentes basadas en el sistema
    const responses = [
      "¡Hola! Bienvenido. ¿En qué puedo ayudarte hoy?",
      "Claro que sí. Tenemos excelentes opciones para ti. ¿Qué te interesa específicamente?",
      "Nuestros precios son muy competitivos y aceptamos múltiples métodos de pago.",
      "¿Te gustaría que te proporcione más información sobre nuestros productos?",
      "Gracias por tu interés. ¿Prefieres que te contacte un asesor?",
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // Simulamos un delay de red
    await new Promise(resolve => setTimeout(resolve, 1500));

    return {
      content: randomResponse
    };

  } catch (error) {
    console.error('Error en chat:', error);
    return {
      content: '',
      error: 'Lo siento, ocurrió un error. Intenta de nuevo.'
    };
  }
};
