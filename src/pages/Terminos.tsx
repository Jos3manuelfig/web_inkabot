import { Link } from "react-router-dom";

const Terminos = () => (
  <div className="min-h-screen bg-background text-foreground px-4 py-20">
    <div className="container max-w-3xl mx-auto">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Volver al inicio</Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Condiciones de Uso</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
        <p><strong className="text-foreground">Última actualización:</strong> Marzo 2026</p>

        <h2 className="text-xl font-semibold text-foreground">1. Aceptación de los términos</h2>
        <p>Al acceder y utilizar los servicios de INKABOT, usted acepta estar sujeto a estas Condiciones de Uso. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.</p>

        <h2 className="text-xl font-semibold text-foreground">2. Descripción del servicio</h2>
        <p>INKABOT proporciona un servicio de automatización de ventas mediante inteligencia artificial integrado con WhatsApp Business. El servicio incluye: respuestas automáticas a consultas de clientes, gestión de catálogo de productos, calificación de leads y asistencia en el proceso de venta.</p>

        <h2 className="text-xl font-semibold text-foreground">3. Requisitos de uso</h2>
        <p>Para utilizar INKABOT, usted debe: ser mayor de 18 años, contar con una cuenta de WhatsApp Business activa, proporcionar información veraz y actualizada, y cumplir con las políticas de uso de WhatsApp y Meta.</p>

        <h2 className="text-xl font-semibold text-foreground">4. Responsabilidades del usuario</h2>
        <p>El usuario es responsable de: la veracidad de la información proporcionada a la IA, el contenido de los productos y servicios ofrecidos a través del bot, el cumplimiento de las leyes locales de comercio y publicidad, y mantener la confidencialidad de sus credenciales de acceso.</p>

        <h2 className="text-xl font-semibold text-foreground">5. Uso prohibido</h2>
        <p>Queda prohibido utilizar INKABOT para: enviar spam o mensajes no solicitados, vender productos ilegales o regulados sin autorización, suplantar identidades o engañar a consumidores, violar derechos de propiedad intelectual de terceros, o cualquier actividad que viole las leyes aplicables.</p>

        <h2 className="text-xl font-semibold text-foreground">6. Propiedad intelectual</h2>
        <p>Todo el software, algoritmos, diseño y contenido de INKABOT son propiedad exclusiva de INKABOT y están protegidos por las leyes de propiedad intelectual. El usuario retiene la propiedad de su contenido y datos comerciales.</p>

        <h2 className="text-xl font-semibold text-foreground">7. Limitación de responsabilidad</h2>
        <p>INKABOT no será responsable por: pérdidas de ventas derivadas de fallos técnicos temporales, respuestas de la IA que no se ajusten completamente a las expectativas del usuario, interrupciones del servicio por mantenimiento o causas de fuerza mayor, ni por acciones de terceros sobre la plataforma de WhatsApp.</p>

        <h2 className="text-xl font-semibold text-foreground">8. Planes y pagos</h2>
        <p>Los planes y precios están sujetos a cambios con previo aviso de 30 días. Las cancelaciones pueden realizarse en cualquier momento. No se realizan reembolsos por períodos parciales de uso.</p>

        <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
        <p>INKABOT se reserva el derecho de modificar estos términos. Las modificaciones entrarán en vigor tras su publicación en el sitio web. El uso continuado del servicio implica la aceptación de los términos modificados.</p>

        <h2 className="text-xl font-semibold text-foreground">10. Legislación aplicable</h2>
        <p>Estas condiciones se rigen por las leyes de la República del Perú. Cualquier controversia será sometida a los tribunales competentes de Lima, Perú.</p>

        <h2 className="text-xl font-semibold text-foreground">11. Contacto</h2>
        <p>Para consultas legales: legal@inkabot.com</p>
      </div>
    </div>
  </div>
);

export default Terminos;
