import React from 'react';
import { Phone, Clock, MapPin, KeyRound } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

// Inline WhatsApp SVG with official green accent
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#25D366] shrink-0`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.59 20.16 9.17 19.78 7.92 19.04L7.62 18.86L4.5 19.68L5.33 16.64L5.14 16.33C4.33 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67M9.25 7.49C9.04 7.49 8.69 7.57 8.41 7.87C8.13 8.18 7.32 8.94 7.32 10.49C7.32 12.03 8.45 13.52 8.6 13.73C8.76 13.94 10.82 17.11 14 18.47C16.64 19.6 17.18 19.38 17.74 19.32C18.31 19.27 19.57 18.57 19.83 17.84C20.09 17.11 20.09 16.48 20.01 16.35C19.93 16.22 19.72 16.14 19.41 15.99C19.09 15.83 17.55 15.07 17.26 14.97C16.98 14.86 16.77 14.81 16.57 15.12C16.36 15.43 15.77 16.14 15.59 16.35C15.41 16.55 15.23 16.58 14.92 16.43C14.61 16.27 13.61 15.94 12.43 14.88C11.51 14.06 10.89 13.04 10.71 12.73C10.53 12.43 10.69 12.26 10.85 12.11C10.99 11.97 11.16 11.75 11.32 11.57C11.47 11.39 11.52 11.26 11.62 11.05C11.73 10.85 11.68 10.67 11.6 10.51C11.52 10.36 10.91 8.85 10.65 8.23C10.4 7.63 10.15 7.71 9.96 7.7C9.79 7.7 9.58 7.49 9.25 7.49Z" />
  </svg>
);

export const Hero: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/523319437616?text=Hola%2C%20necesito%20un%20cerrajero.%0AServicio%3A%20%0AColonia%20o%20zona%3A%20';

  return (
    <section
      id="hero"
      className="relative bg-[#0F1724] text-white pt-20 lg:pt-28 pb-12 lg:pb-20 min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle radial ambient light glow */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F5B21A]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (55% on desktop: 7 cols of 12) */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#182234] border border-slate-700/60 mb-3.5 sm:mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide">
                Abierto ahora <span className="text-slate-400">·</span> 24 horas, los 365 días
              </span>
            </div>

            {/* Eyebrow */}
            <p className="text-sm sm:text-base font-semibold text-[#F5B21A] mb-1.5 sm:mb-2 tracking-wide">
              ¿Te quedaste afuera de tu casa o tu auto?
            </p>

            {/* H1 - Single H1 tag on the page */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] leading-[1.12] text-white tracking-tight mb-3 sm:mb-4">
              Cerrajero 24 horas en Guadalajara y Zapopan
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              Te enviamos al técnico más cercano a tu ubicación. Abrimos casas y autos, cambiamos combinaciones y hacemos llaves con chip, a cualquier hora.
            </p>

            {/* Call to Action Buttons */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-8 sm:mb-10">
              {/* Primary Call Button */}
              <a
                href="tel:+523319437616"
                onClick={() => trackPhoneClick('hero')}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-extrabold text-base sm:text-lg px-7 py-4 rounded-[14px] btn-amber-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-all"
              >
                <span className="absolute inset-0 w-1/3 bg-white/30 transform -skew-x-12 -translate-x-full animate-btn-shine pointer-events-none" />
                <Phone className="w-5 h-5 text-[#0F1724] shrink-0" strokeWidth={2.7} />
                <span>Llamar ahora · 33 1943 7616</span>
              </a>

              {/* Secondary WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-[#182234] border border-white/80 hover:border-white text-white font-medium text-base px-6 py-4 rounded-[14px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Escribir por WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hero Image (visible only on mobile, placed below buttons) */}
            <div className="lg:hidden w-full mb-8">
              <div className="relative rounded-[20px] overflow-hidden border border-[#182234] shadow-2xl bg-[#182234]">
                <img
                  src="/images/hero-movil.webp"
                  alt="Técnico de Cerrajería Móvil 24 GDL abriendo la puerta de una casa en Guadalajara"
                  width={1080}
                  height={720}
                  fetchPriority="high"
                  className="w-full h-auto aspect-[3/2] object-cover"
                />
              </div>
            </div>

            {/* 3 Value Attributes */}
            <div className="w-full pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#182234] border border-[#F5B21A]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  24/7 los 365 días
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#182234] border border-[#F5B21A]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Toda la zona metropolitana
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#182234] border border-[#F5B21A]/30 flex items-center justify-center shrink-0">
                  <KeyRound className="w-5 h-5 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Casas y autos
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (45% on desktop: 5 cols of 12) */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Fine amber offset frame placed 12px behind */}
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[20px] border-2 border-[#F5B21A]/60 pointer-events-none"
              aria-hidden="true"
            />

            {/* Image container with 20px rounded frame and slow Ken Burns effect */}
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl bg-[#182234] aspect-[4/5]">
              <img
                src="/images/hero-escritorio.webp"
                alt="Cerrajero reparando la chapa de una casa en Guadalajara al atardecer mientras la dueña espera tranquila"
                width={1200}
                height={1500}
                fetchPriority="high"
                className="w-full h-full object-cover animate-ken-burns"
              />
              {/* Subtle gradient vignette to blend with night blue theme */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0F1724]/60 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
