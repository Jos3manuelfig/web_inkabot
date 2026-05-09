import { TrendingUp, BarChart3, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "3x", label: "Más ventas en promedio" },
  { icon: Clock, value: "24/7", label: "Disponibilidad total" },
  { icon: BarChart3, value: "90%", label: "Tiempo de respuesta < 5s" },
  { icon: CheckCircle, value: "500+", label: "Empresas automatizadas" },
];

const TrustSection = () => {
  return (
    <section className="section-spacing px-4 relative z-10">
      <div className="container max-w-5xl mx-auto text-center">
        <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
          Resultados
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Empresas que automatizan venden más
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-16">
          Los números hablan por sí solos. La automatización con IA transforma negocios.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card rounded-lg p-6 group hover:border-primary/30 transition-all duration-300">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-3xl md:text-4xl font-bold neon-text tabular-nums mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
