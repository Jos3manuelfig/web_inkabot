import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Necesito saber programar?",
      answer: "No. Nosotros configuramos todo por ti en menos de 24 horas."
    },
    {
      question: "¿Funciona con mi WhatsApp actual?",
      answer: "Funciona con WhatsApp Business. Si no lo tienes, te ayudamos a configurarlo."
    },
    {
      question: "¿Puedo cancelar cuando quiera?",
      answer: "Sí, sin penalidades ni contratos largos."
    },
    {
      question: "¿Cuánto tarda en estar listo mi bot?",
      answer: "Entre 24 y 48 horas hábiles desde que nos envías la información de tu negocio."
    },
    {
      question: "¿Qué pasa si el bot no sabe responder algo?",
      answer: "El bot escala automáticamente al dueño del negocio por WhatsApp."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">
            FAQ
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground animate-fade-up-blur">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
