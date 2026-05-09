import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-spacing px-4">
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="opacity-0 animate-fade-up-blur">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-6 inline-block">
            Automatización inteligente para WhatsApp
          </span>
        </div>

        <h1 className="opacity-0 animate-fade-up-blur stagger-1 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
          ¿Aún vendes{" "}
          <span className="neon-text">manualmente</span>
          <br />
          por WhatsApp?
        </h1>

        <p className="opacity-0 animate-fade-up-blur stagger-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Deja que la inteligencia artificial venda por ti 24/7 mientras tú te enfocas en crecer.
          INKABOT integra IA avanzada en tu WhatsApp para calificar leads y cerrar ventas automáticamente.
        </p>

        <div className="opacity-0 animate-fade-up-blur stagger-3 flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#demo" className="px-8 py-6 text-base">
              Automatiza tus ventas ahora
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#como-funciona" className="px-8 py-6 text-base">
              Cómo funciona
            </a>
          </Button>
        </div>

        {/* Glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;
