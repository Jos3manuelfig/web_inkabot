import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        {/* Big brand */}
        <div className="text-center mb-12">
          <span className="text-[12vw] md:text-[8vw] font-bold tracking-tighter leading-none text-foreground/5 select-none">
            INKABOT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-muted-foreground">
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
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacidad" className="block hover:text-primary transition-colors">Políticas de Privacidad</Link>
              <Link to="/eliminacion-datos" className="block hover:text-primary transition-colors">Eliminación de Datos</Link>
              <Link to="/terminos" className="block hover:text-primary transition-colors">Condiciones de Uso</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} INKABOT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
