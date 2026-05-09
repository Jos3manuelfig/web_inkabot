import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">
            RESULTADOS REALES
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="glass-card rounded-2xl p-8 border border-border/50 relative">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Antes respondía más de 50 mensajes al día manualmente. Ahora el bot atiende solo y yo me enfoco en producir."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">YR</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Yuly R.</p>
                  <p className="text-sm text-muted-foreground">Costuras Yuly, Lima</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="glass-card rounded-2xl p-8 border border-border/50 relative">
            <div className="absolute top-6 left-6 text-primary/20">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Lo mejor es que responde a cualquier hora. Mis clientes preguntan a las 11pm y reciben respuesta al instante."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">CI</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Cliente INKABOT</p>
                  <p className="text-sm text-muted-foreground">Lima</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
