import React, { useState } from 'react';
import { Phone, Plus } from 'lucide-react';
import { trackPhoneClick } from '../utils/analytics';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: '¿Cuánto cuesta el servicio?',
    answer:
      'Depende del tipo de chapa o vehículo, del servicio y de tu zona. Llámanos o mándanos por WhatsApp una foto de la chapa y te decimos el costo.',
  },
  {
    id: 2,
    question: '¿Cuánto tardan en llegar?',
    answer:
      'Enviamos al técnico más cercano a tu ubicación. El tiempo depende de tu zona y del tráfico; al llamar te damos un estimado.',
  },
  {
    id: 3,
    question: '¿Atienden de noche, fines de semana y festivos?',
    answer: 'Sí. Trabajamos las 24 horas, los 365 días del año.',
  },
  {
    id: 4,
    question: '¿Abren autos?',
    answer: 'Sí, abrimos vehículos y también hacemos llaves con chip.',
  },
  {
    id: 5,
    question: 'Perdí mis llaves, ¿pueden cambiar la combinación?',
    answer:
      'Sí. Cambiamos la combinación de tu chapa para que las llaves perdidas ya no funcionen, o instalamos una chapa nueva.',
  },
  {
    id: 6,
    question: '¿En qué zonas dan servicio?',
    answer: 'En Guadalajara, Zapopan y toda la zona metropolitana.',
  },
  {
    id: 7,
    question: '¿Me pedirán comprobar que soy el dueño?',
    answer:
      'Por seguridad, antes de abrir una casa o un auto se pide una identificación que coincida con el domicilio o el vehículo.',
  },
];

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="preguntas" className="bg-white py-16 sm:py-24 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#141A24] tracking-tight mb-3">
            Preguntas frecuentes
          </h2>
          <div className="w-12 h-1 bg-[#F5B21A] mx-auto rounded-full" />
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5 mb-14">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border border-stone-200 rounded-[14px] overflow-hidden transition-colors duration-200 hover:border-stone-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-stone-50/50 hover:bg-stone-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B21A]"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#141A24] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`flex items-center justify-center w-8 h-8 rounded-full bg-white border border-stone-200 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#F5B21A] border-[#F5B21A]' : 'rotate-0'
                    }`}
                  >
                    <Plus
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? 'text-[#0F1724]' : 'text-[#141A24]'
                      }`}
                      strokeWidth={2.5}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-1 sm:pt-1 bg-white text-[#5B6472] text-base leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Under FAQ Call Section */}
        <div className="bg-[#F6F2EC] p-8 rounded-[16px] text-center border border-stone-200/80">
          <p className="text-lg font-bold font-heading text-[#141A24] mb-4">
            ¿Tienes otra duda?
          </p>
          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('faq')}
            className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-extrabold text-base px-8 py-3.5 rounded-[14px] btn-amber-glow transition-all"
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
