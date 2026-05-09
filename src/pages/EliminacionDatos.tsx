import { Link } from "react-router-dom";

const EliminacionDatos = () => (
  <div className="min-h-screen bg-background text-foreground px-4 py-20">
    <div className="container max-w-3xl mx-auto">
      <Link to="/" className="text-primary hover:underline text-sm mb-8 inline-block">← Volver al inicio</Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Eliminación de Datos del Usuario</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed text-sm">
        <p><strong className="text-foreground">Última actualización:</strong> Marzo 2026</p>

        <h2 className="text-xl font-semibold text-foreground">1. Derecho a la eliminación</h2>
        <p>En cumplimiento con las regulaciones de protección de datos, usted tiene el derecho de solicitar la eliminación completa de sus datos personales de nuestros sistemas en cualquier momento.</p>

        <h2 className="text-xl font-semibold text-foreground">2. Cómo solicitar la eliminación</h2>
        <p>Para solicitar la eliminación de sus datos, puede: (a) enviar un correo electrónico a datos@inkabot.com con el asunto "Solicitud de eliminación de datos"; (b) incluir en su solicitud: nombre completo, dirección de correo electrónico asociada a la cuenta y número de WhatsApp registrado.</p>

        <h2 className="text-xl font-semibold text-foreground">3. Datos que se eliminarán</h2>
        <p>Al procesar su solicitud, eliminaremos: información de perfil y cuenta, historial de conversaciones procesadas por la IA, catálogo de productos y configuraciones, datos de contacto y registros de actividad.</p>

        <h2 className="text-xl font-semibold text-foreground">4. Plazo de eliminación</h2>
        <p>Procesaremos su solicitud dentro de los 30 días calendario siguientes a la recepción. Recibirá una confirmación por correo electrónico una vez completada la eliminación.</p>

        <h2 className="text-xl font-semibold text-foreground">5. Datos retenidos</h2>
        <p>Algunos datos pueden ser retenidos por obligaciones legales o contractuales, como registros de facturación (retenidos por el período legal requerido) y registros necesarios para cumplimiento regulatorio. Estos datos serán eliminados una vez que expire el período de retención legal.</p>

        <h2 className="text-xl font-semibold text-foreground">6. Consecuencias de la eliminación</h2>
        <p>La eliminación de datos resultará en la cancelación de su cuenta y servicios activos. Esta acción es irreversible. Le recomendamos descargar cualquier información que desee conservar antes de enviar la solicitud.</p>

        <h2 className="text-xl font-semibold text-foreground">7. Contacto</h2>
        <p>Para solicitudes de eliminación: datos@inkabot.com</p>
      </div>
    </div>
  </div>
);

export default EliminacionDatos;
