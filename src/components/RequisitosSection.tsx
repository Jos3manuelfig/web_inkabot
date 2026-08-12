import { Smartphone, FileText, Rocket } from "lucide-react";

const requisitos = [
  {
    icon: Smartphone,
    title: "Un número dedicado",
    description:
      "Un chip nuevo o número virtual que no esté registrado en WhatsApp. Te guiamos en el proceso.",
  },
  {
    icon: FileText,
    title: "Información de tu negocio",
    description:
      "Nombre, productos, precios y horarios. Todo lo que normalmente le dices a un vendedor nuevo.",
  },
  {
    icon: Rocket,
    title: "Eso es todo",
    description:
      "Nosotros configuramos el resto en 24h. Sin conocimientos técnicos.",
  },
];

const RequisitosSection = () => {
  return (
    <section id="requisitos" className="section-spacing px-4 relative z-10">
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
            Requisitos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            ¿Qué necesitas para empezar?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Sin complicaciones. Solo esto:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {requisitos.map((req, i) => (
            <div
              key={req.title}
              className={`glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden opacity-0 animate-fade-up-blur stagger-${i + 1}`}
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Step number */}
              <span className="absolute top-4 right-5 font-mono-ui text-5xl font-bold text-white/[0.03] select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_hsl(25_100%_55%/0.15)] transition-all duration-500">
                <req.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                {req.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {req.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary/80 to-primary/0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequisitosSection;
