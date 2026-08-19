const Footer = () => {
  return (
    // Los datos legales (razón social, RUC, dirección) y los enlaces a las
    // páginas legales viven en el footer estático de index.html, no aquí:
    // tienen que estar en el HTML crudo para el rastreador de Meta.
    <footer className="relative z-10 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 pt-16 pb-10">
        {/* Big brand */}
        <div className="text-center mb-12">
          <span className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-none text-foreground/5 select-none">
            INKABOT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-3">INKABOT</h4>
            <p className="leading-relaxed">
              Automatización de ventas por WhatsApp con inteligencia artificial. Vende más, trabaja menos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Navegación</h4>
            <div className="space-y-2">
              <a href="#beneficios" className="block hover:text-primary transition-colors">Beneficios</a>
              <a href="#como-funciona" className="block hover:text-primary transition-colors">Cómo funciona</a>
              <a href="#demo" className="block hover:text-primary transition-colors">Demo</a>
              <a href="#configurar" className="block hover:text-primary transition-colors">Configurar</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
