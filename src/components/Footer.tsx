import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

const WhatsAppIconSmall: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#25D366] shrink-0`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.59 20.16 9.17 19.78 7.92 19.04L7.62 18.86L4.5 19.68L5.33 16.64L5.14 16.33C4.33 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67M9.25 7.49C9.04 7.49 8.69 7.57 8.41 7.87C8.13 8.18 7.32 8.94 7.32 10.49C7.32 12.03 8.45 13.52 8.6 13.73C8.76 13.94 10.82 17.11 14 18.47C16.64 19.6 17.18 19.38 17.74 19.32C18.31 19.27 19.57 18.57 19.83 17.84C20.09 17.11 20.09 16.48 20.01 16.35C19.93 16.22 19.72 16.14 19.41 15.99C19.09 15.83 17.55 15.07 17.26 14.97C16.98 14.86 16.77 14.81 16.57 15.12C16.36 15.43 15.77 16.14 15.59 16.35C15.41 16.55 15.23 16.58 14.92 16.43C14.61 16.27 13.61 15.94 12.43 14.88C11.51 14.06 10.89 13.04 10.71 12.73C10.53 12.43 10.69 12.26 10.85 12.11C10.99 11.97 11.16 11.75 11.32 11.57C11.47 11.39 11.52 11.26 11.62 11.05C11.73 10.85 11.68 10.67 11.6 10.51C11.52 10.36 10.91 8.85 10.65 8.23C10.4 7.63 10.15 7.71 9.96 7.7C9.79 7.7 9.58 7.49 9.25 7.49Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/523319437616?text=Hola%2C%20necesito%20un%20cerrajero.%0AServicio%3A%20%0AColonia%20o%20zona%3A%20';

  return (
    <footer className="bg-[#0B111B] text-slate-300 pt-16 pb-28 md:pb-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand & Summary */}
          <div className="lg:col-span-5">
            <a href="#" className="inline-block mb-4">
              <Logo size="md" />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              Cerrajería móvil 24 horas en Guadalajara, Zapopan y la zona metropolitana.
            </p>
            <p className="text-xs text-slate-400">
              Lema: <span className="italic text-slate-300">"La atención que mereces"</span>
            </p>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4">
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide">
              Contacto y Atención
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+523319437616"
                  onClick={() => trackPhoneClick('nav')}
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#F5B21A] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F5B21A]" />
                  <span>33 1943 7616 (Llamadas)</span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('nav')}
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#25D366] transition-colors"
                >
                  <WhatsAppIconSmall className="w-4 h-4" />
                  <span>33 1943 7616 (WhatsApp)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:cerrajeriagdlmovil24@gmail.com"
                  className="inline-flex items-center gap-2.5 text-slate-300 hover:text-[#F5B21A] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F5B21A]" />
                  <span>cerrajeriagdlmovil24@gmail.com</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-slate-300">
                <Clock className="w-4 h-4 text-[#F5B21A]" />
                <span>Horario: 24 horas, los 365 días</span>
              </li>
            </ul>
          </div>

          {/* Coverage Zones List */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide">
              Zonas de Cobertura
            </h4>
            <div className="flex items-start gap-2 text-sm text-slate-400 mb-2">
              <MapPin className="w-4 h-4 text-[#F5B21A] shrink-0 mt-0.5" />
              <span>Servicio móvil a domicilio en:</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed pl-6">
              Guadalajara · Zapopan · Tlaquepaque · Tonalá · Tlajomulco · El Salto
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Cerrajería Móvil 24 GDL. Todos los derechos reservados.</p>
          <p className="text-slate-400">
            Servicio de cerrajería móvil profesional en el estado de Jalisco.
          </p>
        </div>
      </div>
    </footer>
  );
};
