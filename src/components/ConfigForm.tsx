import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ConfigForm = () => {
  const [form, setForm] = useState({
    empresa: "",
    rubro: "",
    descripcion: "",
    productos: "",
    precios: "",
    publico: "",
    whatsapp: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      setLoading(false);
      toast.success("¡Configuración completada!", {
        description: "Tu IA de ventas está siendo entrenada con tus datos.",
      });
      setForm({ empresa: "", rubro: "", descripcion: "", productos: "", precios: "", publico: "", whatsapp: "" });
    }, 3000);
  };

  const fields = [
    { key: "empresa", label: "Nombre de la empresa", type: "text", placeholder: "Mi Negocio S.A.C." },
    { key: "rubro", label: "Rubro / A qué se dedican", type: "text", placeholder: "Ej: Venta de ropa, restaurante, servicios..." },
    { key: "descripcion", label: "Descripción del negocio", type: "textarea", placeholder: "Cuéntanos qué hace tu empresa, qué la diferencia..." },
    { key: "productos", label: "Lista de productos", type: "textarea", placeholder: "Producto 1 - Descripción\nProducto 2 - Descripción..." },
    { key: "precios", label: "Precios", type: "textarea", placeholder: "Producto 1: S/. 50\nProducto 2: S/. 120..." },
    { key: "publico", label: "Público objetivo", type: "text", placeholder: "Ej: Mujeres de 25-45 años interesadas en moda" },
    { key: "whatsapp", label: "Número de WhatsApp", type: "tel", placeholder: "+51 999 999 999" },
  ];

  return (
    <section id="configurar" className="section-spacing px-4 relative z-10">
      <div className="container max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono-ui text-xs tracking-[0.2em] uppercase text-primary mb-4 inline-block">
            Configuración
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Configura tu IA de ventas
          </h2>
          <p className="text-muted-foreground">
            Proporciona los datos de tu negocio para que la IA pueda vender por ti.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 space-y-5 relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
              <div className="font-mono-ui text-sm text-primary animate-pulse">
                Analizando catálogo...
              </div>
            </div>
          )}

          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium mb-2">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  required
                  rows={3}
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
              ) : (
                <input
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              )}
            </div>
          ))}

          <Button variant="hero" size="lg" type="submit" className="w-full py-6" disabled={loading}>
            Configurar mi IA
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ConfigForm;
