import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#25D366] shrink-0`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.59 20.16 9.17 19.78 7.92 19.04L7.62 18.86L4.5 19.68L5.33 16.64L5.14 16.33C4.33 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67M9.25 7.49C9.04 7.49 8.69 7.57 8.41 7.87C8.13 8.18 7.32 8.94 7.32 10.49C7.32 12.03 8.45 13.52 8.6 13.73C8.76 13.94 10.82 17.11 14 18.47C16.64 19.6 17.18 19.38 17.74 19.32C18.31 19.27 19.57 18.57 19.83 17.84C20.09 17.11 20.09 16.48 20.01 16.35C19.93 16.22 19.72 16.14 19.41 15.99C19.09 15.83 17.55 15.07 17.26 14.97C16.98 14.86 16.77 14.81 16.57 15.12C16.36 15.43 15.77 16.14 15.59 16.35C15.41 16.55 15.23 16.58 14.92 16.43C14.61 16.27 13.61 15.94 12.43 14.88C11.51 14.06 10.89 13.04 10.71 12.73C10.53 12.43 10.69 12.26 10.85 12.11C10.99 11.97 11.16 11.75 11.32 11.57C11.47 11.39 11.52 11.26 11.62 11.05C11.73 10.85 11.68 10.67 11.6 10.51C11.52 10.36 10.91 8.85 10.65 8.23C10.4 7.63 10.15 7.71 9.96 7.7C9.79 7.7 9.58 7.49 9.25 7.49Z" />
  </svg>
);

export const FloatingActions: React.FC = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (approx 350px or when hero leaves)
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        if (rect.bottom < 120) {
          setShowFloating(true);
        } else {
          setShowFloating(false);
        }
      } else {
        setShowFloating(window.scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/523319437616?text=Hola%2C%20necesito%20un%20cerrajero.%0AServicio%3A%20%0AColonia%20o%20zona%3A%20';

  if (!showFloating) return null;

  return (
    <>
      {/* Mobile Bottom Fixed Bar (hidden on desktop) */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-[#0F1724]/95 backdrop-blur-md border-t border-[#182234] shadow-[0_-4px_20px_rgba(0,0,0,0.4)] transition-transform duration-300"
        role="region"
        aria-label="Acciones rápidas de contacto"
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Llamar (60% width, amber, 56px height, phone icon with gentle pulse every 6s) */}
          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('barra_movil')}
            className="w-[60%] h-[56px] flex items-center justify-center gap-2.5 bg-[#F5B21A] hover:bg-[#E09E00] active:scale-[0.98] text-[#0F1724] font-heading font-extrabold text-base rounded-[14px] shadow-lg shadow-amber-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <div className="animate-soft-pulse">
              <Phone className="w-5 h-5 text-[#0F1724]" strokeWidth={2.8} />
            </div>
            <span>Llamar</span>
          </a>

          {/* WhatsApp (40% width, dark bg with green icon, 56px height) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('barra_movil')}
            className="w-[40%] h-[56px] flex items-center justify-center gap-2 bg-[#182234] hover:bg-[#202c44] active:scale-[0.98] border border-slate-700/80 text-white font-medium text-sm rounded-[14px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button (hidden on mobile) */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50 transition-opacity duration-300">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('flotante')}
          aria-label="Escribir a Cerrajería Móvil 24 GDL por WhatsApp"
          className="group flex items-center gap-3 bg-[#0F1724] hover:bg-[#182234] border border-slate-700/80 p-3.5 rounded-full shadow-2xl hover:shadow-green-500/20 transition-all hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          <div className="w-10 h-10 rounded-full bg-[#182234] flex items-center justify-center group-hover:scale-110 transition-transform">
            <WhatsAppIcon className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-white pr-2">
            WhatsApp 24h
          </span>
        </a>
      </div>
    </>
  );
};
