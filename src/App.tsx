/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import Location from './components/Location';
import { CTASection, Footer } from './components/Footer';

export default function App() {
  return (
    <main className="relative bg-charcoal min-h-screen">
      {/* Global Aesthetics */}
      <div className="film-grain" />
      
      {/* Navigation */}
      <Navbar />

      {/* Landing Page Sections */}
      <Hero />
      <Story />
      <Menu />
      <Testimonials />
      <Reservation />
      <Location />
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
