import { Link } from "react-router-dom";

const Privacidad = () => (
  <div className="min-h-screen bg-background text-foreground px-4 py-20">
    <div className="container max-w-3xl mx-auto">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Volver al inicio</Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Políticas de Privacidad</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
        <p><strong className="text-foreground">Última actualización:</strong> Marzo 2026</p>

        <h2 className="text-xl font-semibold text-foreground">1. Información que recopilamos</h2>
        <p>INKABOT recopila información personal que usted nos proporciona voluntariamente al registrarse, solicitar una demostración o configurar su cuenta. Esto incluye: nombre completo, dirección de correo electrónico, número de teléfono/WhatsApp, nombre de la empresa, descripción del negocio, catálogo de productos y precios.</p>

        <h2 className="text-xl font-semibold text-foreground">2. Uso de la información</h2>
        <p>Utilizamos su información para: (a) proporcionar y mantener nuestros servicios de automatización; (b) personalizar la experiencia de la IA según su negocio; (c) comunicarnos con usted sobre actualizaciones del servicio; (d) mejorar nuestros algoritmos de inteligencia artificial; (e) cumplir con obligaciones legales.</p>

        <h2 className="text-xl font-semibold text-foreground">3. Almacenamiento y seguridad</h2>
        <p>Sus datos se almacenan en servidores seguros con encriptación AES-256. Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra acceso no autorizado, alteración o destrucción.</p>

        <h2 className="text-xl font-semibold text-foreground">4. Compartición de datos</h2>
        <p>No vendemos, alquilamos ni compartimos su información personal con terceros con fines comerciales. Podemos compartir datos con proveedores de servicios que nos ayudan a operar la plataforma (hosting, procesamiento de pagos) bajo estrictos acuerdos de confidencialidad.</p>

        <h2 className="text-xl font-semibold text-foreground">5. Cookies y tecnologías similares</h2>
        <p>Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analíticas para mejorar nuestros servicios. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>

        <h2 className="text-xl font-semibold text-foreground">6. Derechos del usuario</h2>
        <p>Usted tiene derecho a: acceder a sus datos personales, rectificar información incorrecta, solicitar la eliminación de sus datos, oponerse al procesamiento y solicitar la portabilidad de sus datos. Para ejercer estos derechos, contáctenos a privacidad@inkabot.com.</p>

        <h2 className="text-xl font-semibold text-foreground">7. Cambios a esta política</h2>
        <p>Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán notificados a través de nuestro sitio web y/o por correo electrónico.</p>

        <h2 className="text-xl font-semibold text-foreground">8. Contacto</h2>
        <p>Para consultas sobre privacidad: privacidad@inkabot.com</p>
      </div>
    </div>
  </div>
);

export default Privacidad;
