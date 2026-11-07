/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { WhyUs } from './components/WhyUs';
import { CoverageZones } from './components/CoverageZones';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1724] text-[#141A24] font-sans flex flex-col selection:bg-[#F5B21A] selection:text-[#0F1724]">
      {/* 1. Header / Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1) Hero Section */}
        <Hero />

        {/* 2) Servicios Section */}
        <Services />

        {/* 3) Cómo Funciona Section */}
        <HowItWorks />

        {/* 4) Por Qué Elegirnos Section */}
        <WhyUs />

        {/* 5) Zonas de Cobertura Section */}
        <CoverageZones />

        {/* 6) Preguntas Frecuentes Section */}
        <FAQ />

        {/* 7) CTA Final Section */}
        <FinalCTA />
      </main>

      {/* 8) Footer */}
      <Footer />

      {/* Floating Call & WhatsApp conversion bar */}
      <FloatingActions />
    </div>
  );
}
