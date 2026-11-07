import React, { useRef, useState, useEffect } from 'react';
import { Phone, Clock, Navigation, Home, Cpu } from 'lucide-react';
import { trackPhoneClick, trackWhatsAppClick } from '../utils/analytics';

const WhatsAppIconSmall: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} text-[#25D366] shrink-0`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.59 20.16 9.17 19.78 7.92 19.04L7.62 18.86L4.5 19.68L5.33 16.64L5.14 16.33C4.33 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67M9.25 7.49C9.04 7.49 8.69 7.57 8.41 7.87C8.13 8.18 7.32 8.94 7.32 10.49C7.32 12.03 8.45 13.52 8.6 13.73C8.76 13.94 10.82 17.11 14 18.47C16.64 19.6 17.18 19.38 17.74 19.32C18.31 19.27 19.57 18.57 19.83 17.84C20.09 17.11 20.09 16.48 20.01 16.35C19.93 16.22 19.72 16.14 19.41 15.99C19.09 15.83 17.55 15.07 17.26 14.97C16.98 14.86 16.77 14.81 16.57 15.12C16.36 15.43 15.77 16.14 15.59 16.35C15.41 16.55 15.23 16.58 14.92 16.43C14.61 16.27 13.61 15.94 12.43 14.88C11.51 14.06 10.89 13.04 10.71 12.73C10.53 12.43 10.69 12.26 10.85 12.11C10.99 11.97 11.16 11.75 11.32 11.57C11.47 11.39 11.52 11.26 11.62 11.05C11.73 10.85 11.68 10.67 11.6 10.51C11.52 10.36 10.91 8.85 10.65 8.23C10.4 7.63 10.15 7.71 9.96 7.7C9.79 7.7 9.58 7.49 9.25 7.49Z" />
  </svg>
);

export const WhyUs: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      if (rect.top < viewportHeight && rect.bottom > 0) {
        // Compute parallax displacement max 40px
        const factor = (rect.top - viewportHeight / 2) / viewportHeight;
        setParallaxY(Math.max(-40, Math.min(40, -factor * 40)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl =
    'https://wa.me/523319437616?text=Hola%2C%20necesito%20un%20cerrajero.%0AServicio%3A%20%0AColonia%20o%20zona%3A%20';

  return (
    <section
      id="por-que"
      ref={containerRef}
      className="bg-[#0F1724] text-white py-16 sm:py-24 scroll-mt-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with soft parallax */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[20px] overflow-hidden border border-slate-700/60 shadow-2xl bg-[#182234]">
              <div
                style={{ transform: `translateY(${parallaxY}px)` }}
                className="transition-transform duration-100 ease-out will-change-transform"
              >
                <img
                  src="/images/tecnico-camioneta.webp"
                  alt="Cerrajero junto a su camioneta equipada con herramientas y máquinas para duplicar llaves"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="w-full h-auto aspect-[4/3] object-cover scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Un cerrajero que llega a ti, a cualquier hora
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              No tienes que ir a ningún lado ni esperar a que abra un local. Somos un servicio móvil: llevamos las herramientas hasta tu puerta.
            </p>

            {/* 2x2 Amber linear icons grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#182234] border border-[#F5B21A]/40 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white mb-1">
                    Atención 24 horas
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Los 365 días del año, incluso fines de semana y días festivos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#182234] border border-[#F5B21A]/40 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white mb-1">
                    El técnico más cercano
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Enviamos a quien esté más cerca de tu ubicación.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#182234] border border-[#F5B21A]/40 flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white mb-1">
                    Casas y autos
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Un solo número para la puerta de tu casa y la de tu auto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#182234] border border-[#F5B21A]/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-[#F5B21A]" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-white mb-1">
                    Llaves con chip
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    También hacemos llaves de auto con chip.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 "¿Y si...?" Cards (#182234 with left amber border) */}
            <div className="space-y-3.5 w-full mb-10">
              <div className="bg-[#182234] p-4 sm:p-5 rounded-[12px] border-l-4 border-[#F5B21A] shadow-sm">
                <h4 className="font-heading font-bold text-white text-base mb-1">
                  ¿Y si son las 3 de la mañana?
                </h4>
                <p className="text-sm text-slate-300">
                  Te contestamos. Trabajamos las 24 horas.
                </p>
              </div>

              <div className="bg-[#182234] p-4 sm:p-5 rounded-[12px] border-l-4 border-[#F5B21A] shadow-sm">
                <h4 className="font-heading font-bold text-white text-base mb-1">
                  ¿Y si estoy lejos del centro?
                </h4>
                <p className="text-sm text-slate-300">
                  Cubrimos Guadalajara, Zapopan y toda la zona metropolitana.
                </p>
              </div>

              <div className="bg-[#182234] p-4 sm:p-5 rounded-[12px] border-l-4 border-[#F5B21A] shadow-sm">
                <h4 className="font-heading font-bold text-white text-base mb-1">
                  ¿Y si es mi auto?
                </h4>
                <p className="text-sm text-slate-300">
                  También abrimos vehículos y hacemos llaves con chip.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="tel:+523319437616"
                onClick={() => trackPhoneClick('por_que')}
                className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-extrabold text-base px-7 py-3.5 rounded-[14px] btn-amber-glow transition-all"
              >
                <span className="absolute inset-0 w-1/3 bg-white/30 transform -skew-x-12 -translate-x-full animate-btn-shine pointer-events-none" />
                <Phone className="w-5 h-5 text-[#0F1724]" strokeWidth={2.7} />
                <span>Llamar ahora · 33 1943 7616</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('por_que')}
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-slate-300 hover:text-white py-2"
              >
                <WhatsAppIconSmall className="w-5 h-5" />
                <span>o escríbenos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
