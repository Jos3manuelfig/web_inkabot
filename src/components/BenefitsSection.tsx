import { Zap, MessageSquare, Users, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Automatización 24/7",
    description: "Tu IA vende incluso mientras duermes. Sin pausas, sin horarios, sin límites.",
  },
  {
    icon: MessageSquare,
    title: "Respuestas instantáneas",
    description: "Cada lead recibe atención inmediata. Cero tiempo de espera, máxima conversión.",
  },
  {
    icon: Users,
    title: "Escala sin contratar",
    description: "Atiende miles de conversaciones simultáneas sin un equipo adicional.",
  },
  {
    icon: Smartphone,
    title: "Integración con WhatsApp",
    description: "Se conecta directamente a tu WhatsApp Business. Sin apps extras ni complejidades.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-spacing px-4 relative z-10">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
            Ventajas
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Vende más, trabaja menos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`glass-card rounded-lg p-6 hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-up-blur stagger-${i + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
