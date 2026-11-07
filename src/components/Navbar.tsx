import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { trackPhoneClick } from '../utils/analytics';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Por qué elegirnos', href: '#por-que' },
    { name: 'Zonas', href: '#zonas' },
    { name: 'Preguntas', href: '#preguntas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-[#0F1724]/95 backdrop-blur-md shadow-md shadow-black/20 border-b border-[#182234]'
          : 'h-20 bg-[#0F1724]/60 backdrop-blur-sm lg:bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B21A] rounded-lg">
          <Logo size={scrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 hover:text-[#F5B21A] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B21A] rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Call CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('nav')}
            className="relative overflow-hidden inline-flex items-center gap-2.5 bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] font-heading font-bold text-sm px-5 py-2.5 rounded-[14px] btn-amber-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="absolute inset-0 w-1/3 bg-white/30 transform -skew-x-12 -translate-x-full animate-btn-shine pointer-events-none" />
            <Phone className="w-4 h-4 text-[#0F1724]" strokeWidth={2.5} />
            <span>Llamar · 33 1943 7616</span>
          </a>
        </div>

        {/* Mobile Actions: Call Button + Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+523319437616"
            onClick={() => trackPhoneClick('nav')}
            aria-label="Llamar a Cerrajería Móvil 24 GDL"
            className="w-11 h-11 flex items-center justify-center rounded-[12px] bg-[#F5B21A] hover:bg-[#E09E00] text-[#0F1724] shadow-md shadow-amber-500/20 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Phone className="w-5 h-5 text-[#0F1724]" strokeWidth={2.5} />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="w-11 h-11 flex items-center justify-center rounded-[12px] text-slate-200 hover:text-white bg-[#182234] border border-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B21A]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1724] border-b border-[#182234] px-4 pt-3 pb-6 shadow-2xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#F5B21A] hover:bg-[#182234] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="tel:+523319437616"
                onClick={() => {
                  trackPhoneClick('nav');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2.5 bg-[#F5B21A] text-[#0F1724] font-heading font-bold text-base py-3 rounded-[14px] shadow-lg shadow-amber-500/25"
              >
                <Phone className="w-5 h-5 text-[#0F1724]" strokeWidth={2.5} />
                <span>Llamar · 33 1943 7616</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
