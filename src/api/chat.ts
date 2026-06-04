import { supabase } from "@/integrations/supabase/client";

export interface ChatRequest {
  messages: Array<{ role: string; content: string }>;
  systemPrompt: string;
}

export interface ChatResponse {
  content: string;
  error?: string;
}

// --- Límites de seguridad del lado cliente ---

const SESSION_MSG_KEY = "inkabot_session_msgs";
const MAX_MESSAGES_PER_SESSION = 10;
const RATE_LIMIT_MS = 3000; // 1 mensaje cada 3 segundos

let lastMessageTime = 0;

/** Verifica rate limit: 1 mensaje cada 3 segundos */
function checkRateLimit(): string | null {
  const now = Date.now();
  const elapsed = now - lastMessageTime;
  if (lastMessageTime > 0 && elapsed < RATE_LIMIT_MS) {
    const waitSecs = Math.ceil((RATE_LIMIT_MS - elapsed) / 1000);
    return `Espera ${waitSecs} segundo${waitSecs > 1 ? "s" : ""} antes de enviar otro mensaje.`;
  }
  return null;
}

/** Verifica límite de 10 mensajes por sesión usando localStorage */
function checkSessionLimit(): string | null {
  try {
    const count = parseInt(localStorage.getItem(SESSION_MSG_KEY) || "0", 10);
    if (count >= MAX_MESSAGES_PER_SESSION) {
      return `Has alcanzado el límite de ${MAX_MESSAGES_PER_SESSION} mensajes de prueba. ¡Contáctanos para obtener tu bot completo!`;
    }
  } catch {
    // localStorage no disponible, permitir continuar
  }
  return null;
}

/** Incrementa el contador de mensajes en localStorage */
function incrementSessionCount(): void {
  try {
    const count = parseInt(localStorage.getItem(SESSION_MSG_KEY) || "0", 10);
    localStorage.setItem(SESSION_MSG_KEY, String(count + 1));
  } catch {
    // localStorage no disponible
  }
}

/** Obtiene el número de mensajes restantes en la sesión */
export function getRemainingMessages(): number {
  try {
    const count = parseInt(localStorage.getItem(SESSION_MSG_KEY) || "0", 10);
    return Math.max(0, MAX_MESSAGES_PER_SESSION - count);
  } catch {
    return MAX_MESSAGES_PER_SESSION;
  }
}

/**
 * Envía un mensaje al chat a través de la Supabase Edge Function.
 * La API key de Anthropic NUNCA sale del servidor.
 */
export const chatWithAnthropic = async (request: ChatRequest): Promise<ChatResponse> => {
  // Verificar rate limit
  const rateLimitError = checkRateLimit();
  if (rateLimitError) {
    return { content: "", error: rateLimitError };
  }

  // Verificar límite de sesión
  const sessionLimitError = checkSessionLimit();
  if (sessionLimitError) {
    return { content: "", error: sessionLimitError };
  }

  try {
    lastMessageTime = Date.now();

    const { data, error } = await supabase.functions.invoke("chat", {
      body: {
        messages: request.messages,
        systemPrompt: request.systemPrompt,
      },
    });

    if (error) {
      console.error("Error en Edge Function:", error);
      return {
        content: "",
        error: "Lo siento, ocurrió un error. Intenta de nuevo.",
      };
    }

    // Incrementar contador solo si la respuesta fue exitosa
    if (data?.content?.[0]?.text) {
      incrementSessionCount();
      return { content: data.content[0].text };
    }

    // Manejar errores devueltos por la Edge Function
    if (data?.error) {
      return { content: "", error: data.error };
    }

    return {
      content: "",
      error: "No se recibió respuesta del asistente.",
    };
  } catch (error) {
    console.error("Error en chat:", error);
    return {
      content: "",
      error: "Lo siento, ocurrió un error. Intenta de nuevo.",
    };
  }
};