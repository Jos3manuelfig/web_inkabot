import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        
        .whatsapp-button {
          animation: pulse 2s infinite;
        }
        
        .whatsapp-button:hover {
          animation: none;
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap">
              ¿Tienes dudas? Escríbenos
              <div className="absolute top-full right-4 -mt-1">
                <div className="border-4 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          )}
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/51968201492"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
