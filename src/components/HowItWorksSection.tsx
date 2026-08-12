const steps = [
  {
    num: "01",
    title: "Conectas tu WhatsApp",
    description: "Vincula tu número de WhatsApp Business en minutos. Sin conocimientos técnicos.",
  },
  {
    num: "02",
    title: "Configuras tus productos",
    description: "Carga tu catálogo, precios y reglas de negocio. La IA aprende tu negocio.",
  },
  {
    num: "03",
    title: "La IA vende automáticamente",
    description: "INKABOT responde, califica leads y cierra ventas 24/7 en piloto automático.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-spacing px-4 relative z-10">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
            Proceso
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Así de simple funciona
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden sm:block" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Number */}
                <div className="flex-1 flex justify-end">
                  <div className={`max-w-md ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                    <span className="font-mono-ui text-5xl font-bold text-primary/20">{step.num}</span>
                    <h3 className="text-2xl font-semibold mt-2 mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(25_100%_55%/0.5)] z-10 shrink-0" />

                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
