import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

const zones = [
  'Guadalajara',
  'Zapopan',
  'Tlaquepaque',
  'Tonalá',
  'Tlajomulco de Zúñiga',
  'El Salto',
];

export const CoverageZones: React.FC = () => {
  return (
    <section
      id="zonas"
      className="relative bg-[#F6F2EC] py-16 sm:py-24 scroll-mt-12 overflow-hidden"
    >
      {/* Decorative SVG street line grid in #E8E1D6 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="street-grid"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 120 0 L 0 0 0 120 M 0 60 L 120 60 M 60 0 L 60 120 M 0 30 L 120 30 M 30 0 L 30 120 M 0 90 L 120 90 M 90 0 L 90 120"
                fill="none"
                stroke="#E8E1D6"
                strokeWidth="1.5"
              />
              {/* Diagonal arterial avenue line */}
              <path
                d="M 0 0 L 120 120 M 0 120 L 120 0"
                fill="none"
                stroke="#DDD4C7"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#street-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#141A24] tracking-tight mb-4">
            Llegamos a toda la zona metropolitana de Guadalajara
          </h2>
          <div className="w-12 h-1 bg-[#F5B21A] mx-auto rounded-full" />
        </div>

        {/* Large Coverage Chips with subtle staggered styling */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          {zones.map((zone, idx) => (
            <div
              key={zone}
              style={{ animationDelay: `${idx * 80}ms` }}
              className="inline-flex items-center gap-2.5 bg-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-[14px] shadow-sm hover:shadow-md border border-stone-200/90 text-base sm:text-lg font-heading font-bold text-[#141A24] transition-all duration-200 hover:-translate-y-0.5"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5B21A] shrink-0" strokeWidth={2.5} />
              <span>{zone}</span>
            </div>
          ))}
        </div>

        {/* Reassurance text */}
        <p className="text-base sm:text-lg text-[#5B6472] font-medium max-w-xl mx-auto mb-6 sm:mb-8">
          ¿No ves tu colonia? Llámanos y te confirmamos al momento.
        </p>

        {/* Call CTA */}
        <div>
          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('zonas')}
            className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-extrabold text-base sm:text-lg px-8 py-4 rounded-[14px] btn-amber-glow transition-all"
          >
            <span className="absolute inset-0 w-1/3 bg-white/30 transform -skew-x-12 -translate-x-full animate-btn-shine pointer-events-none" />
            <Phone className="w-5 h-5 text-[#0F1724]" strokeWidth={2.7} />
            <span>Llamar ahora · 33 1943 7616</span>
          </a>
        </div>
      </div>
    </section>
  );
};
