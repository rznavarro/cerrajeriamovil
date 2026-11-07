import React from 'react';
import { Phone } from 'lucide-react';
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

interface ServiceItem {
  id: string;
  locationKey: 'servicio_casa' | 'servicio_auto' | 'servicio_llave_chip' | 'servicio_chapa';
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsappUrl: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'casa',
    locationKey: 'servicio_casa',
    title: 'Apertura de casas',
    description:
      'Te quedaste afuera, perdiste las llaves o la chapa no gira. Abrimos todo tipo de chapas de casas, departamentos y negocios.',
    image: '/images/servicio-casa.webp',
    imageAlt: 'Cerrajero abriendo la reja de una casa en Guadalajara junto a la propietaria',
    whatsappUrl:
      'https://wa.me/523319437616?text=Hola%2C%20necesito%20abrir%20la%20puerta%20de%20mi%20casa.%20Estoy%20en%20la%20colonia%3A%20',
  },
  {
    id: 'auto',
    locationKey: 'servicio_auto',
    title: 'Apertura de autos',
    description: '¿Las llaves quedaron adentro? Abrimos tu auto en el lugar donde estés.',
    image: '/images/servicio-auto.webp',
    imageAlt: 'Cerrajero automotriz abriendo la puerta de un auto en una calle de Guadalajara',
    whatsappUrl:
      'https://wa.me/523319437616?text=Hola%2C%20necesito%20abrir%20mi%20auto.%0AModelo%20y%20a%C3%B1o%3A%20%0AEstoy%20en%3A%20',
  },
  {
    id: 'llave-chip',
    locationKey: 'servicio_llave_chip',
    title: 'Llaves con chip',
    description: 'Perdiste la llave de tu auto o necesitas un duplicado. Hacemos llaves con chip.',
    image: '/images/servicio-llave-chip.webp',
    imageAlt: 'Llave de auto con chip y control remoto junto al equipo de programación',
    whatsappUrl:
      'https://wa.me/523319437616?text=Hola%2C%20necesito%20una%20llave%20con%20chip.%0AMarca%2C%20modelo%20y%20a%C3%B1o%20del%20auto%3A%20',
  },
  {
    id: 'chapa',
    locationKey: 'servicio_chapa',
    title: 'Cambio de combinación e instalación de chapas',
    description:
      'Te mudaste, perdiste un juego de llaves o quieres más seguridad. Cambiamos la combinación o instalamos una chapa nueva completa.',
    image: '/images/servicio-chapa.webp',
    imageAlt: 'Instalación de una chapa nueva con llaves en una puerta de madera',
    whatsappUrl:
      'https://wa.me/523319437616?text=Hola%2C%20quiero%20cambiar%20la%20combinaci%C3%B3n%20o%20instalar%20una%20chapa%20nueva.%0AColonia%3A%20',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="bg-[#F6F2EC] py-16 sm:py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#141A24] tracking-tight mb-3">
            ¿Qué necesitas resolver?
          </h2>
          <p className="text-base sm:text-lg text-[#5B6472] font-normal leading-relaxed">
            Elige tu caso y llámanos. Vamos a donde estés.
          </p>
        </div>

        {/* 2x2 Services Grid (1 column on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-[14px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/80 flex flex-col"
            >
              {/* Photo with subtle hover zoom */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  {/* H3 with amber underline that expands on hover */}
                  <div className="relative inline-block mb-3">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#141A24] leading-snug">
                      {service.title}
                    </h3>
                    <span className="block h-[2px] bg-[#F5B21A] w-0 group-hover:w-full transition-all duration-300 ease-out mt-1" />
                  </div>

                  <p className="text-base text-[#5B6472] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <a
                    href="tel:+523319437616"
                    onClick={() => trackPhoneClick(service.locationKey)}
                    className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-bold text-sm sm:text-base px-5 py-3 rounded-[12px] btn-amber-glow transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#0F1724]" strokeWidth={2.5} />
                    <span>Llamar ahora</span>
                  </a>

                  <a
                    href={service.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(service.locationKey)}
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-[#141A24] hover:text-black py-2 group/wa"
                  >
                    <WhatsAppIconSmall className="w-4 h-4 group-hover/wa:scale-110 transition-transform" />
                    <span>o escríbenos por WhatsApp</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
