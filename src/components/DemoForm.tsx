import { useState, FormEvent, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, ArrowRight, ArrowLeft, MessageCircle, Phone, Video, MoreVertical, Check, CheckCheck } from "lucide-react";
import { toast } from "sonner";
import { chatWithAnthropic, getRemainingMessages } from "@/api/chat";

type Step = 1 | 2 | 3;
type Tone = "amigable" | "formal" | "divertido";
type Message = { role: "user" | "assistant"; content: string };

const RUBROS = [
  "Tienda de ropa / moda",
  "Restaurante / delivery",
  "Academia / cursos online",
  "Salón de belleza / estética",
  "Consultorio médico / dental",
  "Ferretería / materiales",
  "Inmobiliaria",
  "Gym / fitness",
  "Otro",
];

const PROMPT_EXAMPLE = `Ejemplo: "Somos una tienda de zapatillas deportivas en Lima. Vendemos Nike, Adidas y Puma. Nuestros precios van de S/150 a S/500. Ofrecemos envío gratis en Lima y aceptamos Yape, Plin y transferencia. Horario: Lunes a Sábado 9am-7pm."`;

const DemoForm = () => {
  const [step, setStep] = useState<Step>(1);
  const [negocio, setNegocio] = useState("");
  const [rubro, setRubro] = useState("");
  const [tono, setTono] = useState<Tone>("amigable");
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [remaining, setRemaining] = useState(getRemainingMessages());
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const buildSystemPrompt = () => {
    const toneMap = {
      amigable: "amigable, cercano y cálido",
      formal: "profesional, formal y respetuoso",
      divertido: "divertido, con emojis y humor ligero",
    };
    return `Eres un asistente de ventas por WhatsApp para "${negocio}", un negocio del rubro "${rubro}".
Tu tono debe ser ${toneMap[tono]}.
Responde siempre en español. Sé conciso (máximo 2-3 oraciones por mensaje). 
Tu objetivo es ayudar al cliente, responder preguntas sobre productos/servicios y cerrar ventas.
${prompt ? `\nInformación adicional del negocio:\n${prompt}` : ""}
No menciones que eres una IA. Actúa como si fueras un vendedor real del negocio.`;
  };

  const handleStep1Submit = (e: FormEvent) => {
    e.preventDefault();
    if (!negocio.trim() || !rubro) {
      toast.error("Completa el nombre y rubro del negocio");
      return;
    }
    setMessages([]);
    setStep(2);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Verificar límite antes de agregar el mensaje
    if (remaining <= 0) {
      toast.error(`Has alcanzado el límite de mensajes de prueba. ¡Contáctanos para tu bot completo!`);
      return;
    }

    const userMsg: Message = { role: "user", content: input.trim() };
    const allMessages = [...messages, userMsg];
    setMessages(allMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chatWithAnthropic({
        messages: allMessages.map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        systemPrompt: buildSystemPrompt()
      });

      if (response.error) {
        throw new Error(response.error);
      }

      if (response.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: response.content },
        ]);
        // Actualizar contador de mensajes restantes
        setRemaining(getRemainingMessages());
      } else {
        throw new Error("No se recibió respuesta del asistente");
      }
      
    } catch (e: any) {
      console.error("Error en chat:", e);
      toast.error(e.message || "Error al conectar con el asistente");
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Lo siento, ocurrió un error. Intenta de nuevo." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppLead = () => {
    const text = encodeURIComponent(
      `¡Hola! Quiero INKABOT para mi negocio.\n\nNegocio: ${negocio}\nRubro: ${rubro}\nTono: ${tono}`
    );
    window.open(`https://wa.me/51968201492?text=${text}`, "_blank");
  };

  return (
    <section id="demo" className="section-spacing px-4 relative z-10">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
            Demo Interactivo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Prueba tu bot en vivo
          </h2>
          <p className="text-muted-foreground">
            Configura tu negocio y chatea con tu IA como lo haría un cliente real.
          </p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[
            { n: 1, label: "TU NEGOCIO" },
            { n: 2, label: "PRUEBA EL BOT" },
            { n: 3, label: "CONTACTO" },
          ].map(({ n, label }) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  step >= n
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {n}
              </div>
              <span
                className={`text-xs font-mono-ui tracking-wider hidden sm:inline ${
                  step >= n ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
              {n < 3 && (
                <div
                  className={`w-8 h-px mx-1 ${
                    step > n ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Business Form */}
        {step === 1 && (
          <form onSubmit={handleStep1Submit} className="glass-card rounded-lg p-8 space-y-5 animate-fade-up-blur">
            <div>
              <span className="font-mono-ui text-xs text-primary tracking-wider">PASO 1 DE 3</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 mb-1">Cuéntanos sobre tu negocio</h3>
              <p className="text-muted-foreground text-sm">
                Vamos a personalizar el bot con tu información real para que veas exactamente cómo funcionaría.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Nombre del negocio</label>
              <input
                type="text"
                required
                placeholder="Ej: Mi Tienda Online"
                value={negocio}
                onChange={(e) => setNegocio(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Rubro / industria</label>
              <select
                required
                value={rubro}
                onChange={(e) => setRubro(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
              >
                <option value="" disabled>Selecciona tu rubro</option>
                {RUBROS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tono del bot</label>
              <div className="flex gap-3">
                {([
                  { value: "amigable", emoji: "😊", label: "Amigable" },
                  { value: "formal", emoji: "💼", label: "Formal" },
                  { value: "divertido", emoji: "🎉", label: "Divertido" },
                ] as const).map(({ value, emoji, label }) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => setTono(value)}
                    className={`flex-1 py-3 rounded-lg border text-sm font-medium transition-all ${
                      tono === value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary border-border text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    {emoji} {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Describe tu negocio para la IA <span className="text-muted-foreground">(opcional)</span>
              </label>
              <textarea
                rows={4}
                placeholder={PROMPT_EXAMPLE}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm leading-relaxed resize-none"
              />
            </div>

            <Button variant="hero" size="lg" type="submit" className="w-full py-6">
              Ver mi bot en acción <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>
        )}

        {/* Step 2: WhatsApp Chat Simulation */}
        {step === 2 && (
          <div className="animate-fade-up-blur">
            {/* WhatsApp-style header */}
            <div className="bg-[hsl(var(--surface))] rounded-t-lg border border-border border-b-0">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <button onClick={() => setStep(1)} className="text-muted-foreground hover:text-foreground transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{negocio}</p>
                    <p className="text-xs text-primary">en línea</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Video className="w-5 h-5" />
                  <Phone className="w-5 h-5" />
                  <MoreVertical className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Chat area */}
            <div className="bg-[hsl(var(--background))] border-x border-border h-[400px] overflow-y-auto px-4 py-4 space-y-3"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-sm py-16">
                  <MessageCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
                  <p>Escribe un mensaje como lo haría un cliente</p>
                  <p className="text-xs mt-1 opacity-60">Ej: "Hola, ¿qué productos tienen?"</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary/20 text-foreground rounded-br-sm"
                        : "bg-secondary text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                    <div className={`flex items-center gap-1 mt-1 ${msg.role === "user" ? "justify-end" : ""}`}>
                      <span className="text-[10px] text-muted-foreground">
                        {new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                      {msg.role === "user" && <CheckCheck className="w-3 h-3 text-primary" />}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg px-4 py-3 rounded-bl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Chat input */}
            <div className="bg-[hsl(var(--surface))] rounded-b-lg border border-border border-t-0 px-3 py-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe un mensaje..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage())}
                  className="flex-1 bg-secondary border border-border rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Editar negocio
                </button>
                <span className={`text-xs font-mono-ui ${remaining <= 3 ? 'text-orange-400' : 'text-muted-foreground'}`}>
                  {remaining > 0 ? `${remaining} msg restantes` : 'Límite alcanzado'}
                </span>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => setStep(3)}
                  className="text-xs"
                >
                  Quiero este bot <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: CTA / Lead */}
        {step === 3 && (
          <div className="glass-card rounded-lg p-8 text-center animate-fade-up-blur space-y-6">
            <div>
              <span className="font-mono-ui text-xs text-primary tracking-wider">PASO 3 DE 3</span>
              <h3 className="text-2xl md:text-3xl font-bold mt-1 mb-2">
                ¡Tu bot está listo!
              </h3>
              <p className="text-muted-foreground">
                ¿Te gustó cómo responde? Podemos tener tu bot funcionando en tu WhatsApp en menos de 24 horas.
              </p>
            </div>

            <div className="bg-secondary/50 rounded-lg p-4 text-left text-sm space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Negocio:</span>
                <span className="font-medium">{negocio}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rubro:</span>
                <span className="font-medium">{rubro}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tono:</span>
                <span className="font-medium capitalize">{tono}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mensajes de prueba:</span>
                <span className="font-medium">{messages.filter((m) => m.role === "user").length}</span>
              </div>
            </div>

            <Button
              variant="hero"
              size="lg"
              onClick={handleWhatsAppLead}
              className="w-full py-6 text-lg"
            >
              🚀 Quiero este bot para mi negocio
            </Button>

            <button
              onClick={() => setStep(2)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Volver a probar el bot
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoForm;
