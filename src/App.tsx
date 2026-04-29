/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load sections below the fold
const Story = lazy(() => import('./components/Story'));
const Menu = lazy(() => import('./components/Menu'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Reservation = lazy(() => import('./components/Reservation'));
const Location = lazy(() => import('./components/Location'));

// Import Footer sections
const FooterModule = lazy(() => import('./components/Footer'));
const CTASection = lazy(() => import('./components/Footer').then(module => ({ default: module.CTASection })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

export default function App() {
  return (
    <main className="relative bg-charcoal min-h-screen">
      {/* Global Aesthetics */}
      <div className="film-grain" />
      
      {/* Navigation */}
      <Navbar />

      {/* Landing Page Sections - Hero is eagerly loaded */}
      <Hero />
      
      <Suspense fallback={<div className="h-96 bg-charcoal" />}>
        <Story />
        <Menu />
        <Testimonials />
        <Reservation />
        <Location />
        <CTASection />
        <Footer />
      </Suspense>
    </main>
  );
}
