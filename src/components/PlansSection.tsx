import { Check } from "lucide-react";

const PlansSection = () => {
  return (
    <section id="planes" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="neon-text">Planes</span> para tu Negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para automatizar tus ventas y crecer tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan Básico */}
          <div className="glass-card rounded-2xl p-8 relative hover:shadow-[0_0_30px_hsl(147_100%_50%/0.3)] transition-all duration-300">
            <div className="absolute top-4 right-4">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                PARA EMPEZAR
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Emprendedor</h3>
              <p className="text-muted-foreground mb-4">Automatiza tus primeras ventas sin complicaciones</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">S/79</span>
                <span className="text-muted-foreground ml-2">/mes</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>200 conversaciones activas/mes</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Respuestas automáticas IA</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Integración con WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Panel de estadísticas básico</span>
              </div>
            </div>

            <a href="https://app.inkabot.online/login" className="w-full bg-primary/10 text-primary border border-primary/20 rounded-lg py-3 font-semibold hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(147_100%_50%/0.4)] transition-all duration-300 inline-block text-center">
              Quiero el Plan Emprendedor
            </a>
          </div>

          {/* Plan Profesional */}
          <div className="glass-card rounded-2xl p-8 relative hover:shadow-[0_0_30px_hsl(147_100%_50%/0.3)] transition-all duration-300 border border-primary/20">
            <div className="absolute top-4 right-4">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                RECOMENDADO
              </span>
            </div>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Profesional</h3>
              <p className="text-muted-foreground mb-4">Para negocios que quieren crecer en serio</p>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">S/189</span>
                <span className="text-muted-foreground ml-2">/mes</span>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>600 conversaciones activas/mes</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Respuestas automáticas IA avanzadas</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Integración con múltiples canales</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Panel de estadísticas avanzado</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Soporte prioritario 24/7</span>
              </div>
            </div>

            <a href="https://app.inkabot.online/login" className="w-full bg-primary text-primary-foreground rounded-lg py-3 font-semibold hover:shadow-[0_0_20px_hsl(147_100%_50%/0.4)] transition-all duration-300 inline-block text-center">
              Elegir Plan Profesional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
