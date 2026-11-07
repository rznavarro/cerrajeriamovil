import React, { useRef, useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Llámanos o escríbenos',
    description: 'Cuéntanos qué pasó y dónde estás.',
  },
  {
    number: '02',
    title: 'Enviamos al técnico más cercano',
    description: 'Sale hacia tu ubicación el técnico que esté más cerca de ti.',
  },
  {
    number: '03',
    title: 'Lo resolvemos en el lugar',
    description: 'Abrimos, cambiamos la combinación o instalamos tu chapa ahí mismo.',
  },
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      const progress = (start - rect.top) / (start - end + rect.height * 0.5);
      
      const clamped = Math.max(0, Math.min(1, progress));
      setLineProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="como-funciona"
      ref={sectionRef}
      className="bg-white py-16 sm:py-24 scroll-mt-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#141A24] tracking-tight mb-3">
            Así de simple
          </h2>
          <div className="w-12 h-1 bg-[#F5B21A] mx-auto rounded-full" />
        </div>

        {/* 3 Steps Container */}
        <div className="relative mb-16 sm:mb-20">
          {/* Desktop Connecting Line behind steps */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-stone-200 z-0">
            <div
              className="h-full bg-[#F5B21A] transition-all duration-300 ease-out origin-left"
              style={{ width: `${lineProgress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="flex flex-col items-center md:items-start text-center md:text-left bg-stone-50/60 md:bg-transparent p-6 md:p-0 rounded-[14px] md:rounded-none border border-stone-200/60 md:border-none"
              >
                {/* Number Badge with Amber Highlight */}
                <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0F1724] border-2 border-[#F5B21A] shadow-md mb-6">
                  <span className="font-heading font-extrabold text-2xl text-[#F5B21A]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#141A24] mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-[#5B6472] leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing & CTA */}
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-medium text-[#141A24] mb-6">
            Estamos disponibles ahora mismo, de día o de noche.
          </p>

          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('como_funciona')}
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
